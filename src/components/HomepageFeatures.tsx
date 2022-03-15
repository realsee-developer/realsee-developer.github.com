import React from 'react';
import './HomepageFeatures.css';

type FeatureItem = {
  title: string;
  image: string;
  url: string,
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '核心 SDK',
    image: '//vrlab-static.ljcdn.com/release/web/sdk.9f767fa0.svg',
    url: '/docs/front/3d-space/intro',
    description: (
      <>
          解剖三维重建能力，为您重建三维空间提供无限可能。
      </>
    ),
  },
  {
    title: '容器集成',
    image: '//vrlab-static.ljcdn.com/release/web/webview.c1fbdaa7.svg',
    url: '/docs/webview/intro',
    description: (
      <>
        集成如视容器，让您的三维空间跨平台完美演绎。
      </>
    ),
  },
  {
    title: '开放 API',
    image: '//vrlab-static.ljcdn.com/release/web/api.f7d732ad.svg',
    url: '/docs/end/api/intro',
    description: (
      <>
        连通开放 API，丝滑接入如视云服务，为您的三维空间数据表达保驾护航。
      </>
    ),
  },
];

function Feature({title, image, url, description}: FeatureItem) {
  const handleClick = () => {
    window.location.href = url
  }

  return (
    <div className="col col--4" onClick={handleClick} style={{cursor: 'pointer'}}>
      <div className="text--center">
        <img className="feature" alt={title} src={image} style={{height: '80px'}}/>
      </div>
      <div className="text--center padding-horiz--md" style={{marginTop: '40px'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
