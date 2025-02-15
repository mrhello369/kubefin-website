const { Component } = require('react');

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/introduction',
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Installation',
          link: {
            type: 'doc',
            id: 'install',
          },
          items: [
            {
              type: 'doc',
              label: 'kubectl',
              id: 'installation/kubectl',
            },
          ],
        },
      ],
    },
    'roadmap/README',
  ],
};
