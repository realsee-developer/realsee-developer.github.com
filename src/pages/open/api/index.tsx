import * as React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { API } from "@stoplight/elements";
// import '@stoplight/elements/styles.min.css'
import "./index.css";
import "./custom.css";
import Translate, { translate } from "@docusaurus/Translate";

export default function Home(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext();

  const locale =
    i18n.currentLocale === i18n["defaultLocale"]
      ? ""
      : "-" + i18n.currentLocale;

  return (
    <Layout
      title={translate({ message: "如视开放 API" })}
      description={<Translate>开放共建三维生态，互联大千世界</Translate>}
    >
      <BrowserOnly>
        {() => (
          <API
            layout="sidebar"
            hideTryIt={false}
            router="hash"
            basePath=""
            apiDescriptionUrl={`${siteConfig.baseUrl}openapi${locale}.yaml`}
          />
        )}
      </BrowserOnly>
    </Layout>
  );
}
