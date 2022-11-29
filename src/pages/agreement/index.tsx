import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../index.css";
import style from "./style.module.css";
import Translate, { translate } from "@docusaurus/Translate";
import AgreementMD from "./_agreement.mdx";
import AgreementMDEn from "./_agreement-en.mdx";

export default function Agreement(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={<Translate>开放共建三维生态，互联大千世界</Translate>}
    >
      <div className={style.Page}>
        {i18n.currentLocale === "zh-CN" && <AgreementMD />}
        {i18n.currentLocale === "en" && <AgreementMDEn />}
      </div>
    </Layout>
  );
}
