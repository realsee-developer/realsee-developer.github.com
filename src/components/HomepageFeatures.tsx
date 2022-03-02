import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  url: string,
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '核心 SDK',
    image: '/img/undraw_manual_sdk.svg',
    url: '/docs/front/3d-space/intro',
    description: (
      <>
          解剖三维重建能力，为您重建三维空间提供无限可能。
      </>
    ),
  },
  {
    title: '容器集成',
    image: '/img/undraw_manual_container.svg',
    url: '/docs/front/3d-space/container/app/desc',
    description: (
      <>
        集成如视容器，让您的三维空间跨平台完美演绎。
      </>
    ),
  },
  {
    title: '如视 API',
    image: '/img/undraw_manual_api.svg',
    url: 'https://developers.realsee.com/docs/#/docs/five/server/README',
    description: (
      <>
        连通如视 API，丝滑接入如视服务，为您的三维空间表达保驾护航。
      </>
    ),
  },
];

function Feature({title, image, url, description}: FeatureItem) {
  const handleClick = () => {
    window.location.href = url
  }

  return (
    <div className={clsx('col col--4')} onClick={handleClick} style={{cursor: 'pointer'}}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} style={{height: '100px'}}/>
      </div>
      <div className="text--center padding-horiz--md" style={{marginTop: '30px'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
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
