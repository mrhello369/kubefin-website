import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: <Translate>Cost Insights</Translate>,
    imgUrl: 'img/cost-insights.png',
    description: (
      <p>
        <Translate>
          Easily view the cost overview of multiple clusters from different clouds in one page. Additionally, KubeFin allows you to dive deeper into the cost details of each cluster by analyzing various dimensions such as nodes, workloads, namespaces and etc.
        </Translate>
      </p>
    ),
  },
  {
    title: <Translate>Optimize Cost automatically (Available soon)</Translate>,
    imgUrl: 'img/optimize-cost-automatically.png',
    description: (
      <p>
        <Translate>
          Once KubeFin is installed in clusters, it will analyze cloud resources usage and do right-sizing(CPU/Memory Request right-sizing, EC2 nodes' spec right-sizing and Spot optimization etc) automatically to reduce your cloud cost up to 40%.   
        </Translate>
      </p>
    ),
    reverse: true,
  },
  {
    title: <Translate>Optimize Cost Continually(Available soon)</Translate>,
    imgUrl: 'img/optimize-cost-continually.png',
    description: (
      <p>
        <Translate>
          KubeFin will continuously collect and analyze workload load information, continuously optimize cluster resource, and reduce cluster costs.
        </Translate>
      </p>
    ),
  },
]

export default features
