const fs = require("fs");
const path = require("path");
const glob = require("glob");
const CryptoJS = require("crypto-js");

async function translate(words) {
  const appKey = "2b60b2379d49bf22";
  const key = "RdTSDHBStXpHIa4iTqjRRjSwSPnZZSHz"; //注意：暴露appSecret，有被盗用造成损失的风险
  const salt = new Date().getTime();
  const curtime = Math.round(new Date().getTime() / 1000);
  const query = Array.isArray(words) ? words.join("\n") : words;
  // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
  const from = "zh-CHS";
  const to = "en";
  const str1 = appKey + truncate(query) + salt + curtime + key;

  //console.log('---',str1);

  const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);

  return await fetch(
    `http://openapi.youdao.com/api?q=${encodeURIComponent(
      query
    )}&appKey=${encodeURIComponent(appKey)}&salt=${encodeURIComponent(
      salt
    )}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(
      to
    )}&sign=${encodeURIComponent(sign)}&signType=${encodeURIComponent(
      "v3"
    )}&curtime=${encodeURIComponent(curtime)}`
  ).then((res) => res.json());
}

function truncate(q) {
  var len = q.length;
  if (len <= 20) return q;
  return q.substring(0, 10) + len + q.substring(len - 10, len);
}

(async () => {
  const fileList = glob
    .sync(path.resolve(__dirname, "./en/**/*.json"))
    .map((filepath) => [filepath, require(filepath)]);

  for (const [filePath, fileContent] of fileList) {
    for (const key in fileContent) {
      const message = fileContent[key].message;
      if (/[^\x00-\xff]+/.test(message)) {
        const { translation } = await translate(message);
        fileContent[key].message = translation ? translation[0] : message;
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2), {
      encoding: "utf-8",
    });
  }

  console.log("finish !");
})();
