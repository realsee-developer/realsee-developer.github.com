import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../index.css";
import style from "./style.module.css";
import AgreementMD from "./_agreement.mdx";
import Translate, { translate } from "@docusaurus/Translate";

export default function Agreement(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={<Translate>开放共建三维生态，互联大千世界</Translate>}
    >
      <div className={style.Page}>
        <AgreementMD />
      </div>
    </Layout>
  );
}
