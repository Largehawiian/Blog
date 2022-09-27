import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a54'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e25'),
    exact: true
  },
  {
    path: '/blog/powershell-blog-power',
    component: ComponentCreator('/blog/powershell-blog-power', '438'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'db3'),
    exact: true
  },
  {
    path: '/blog/tags/powershell',
    component: ComponentCreator('/blog/tags/powershell', '51b'),
    exact: true
  },
  {
    path: '/blog/tags/variables',
    component: ComponentCreator('/blog/tags/variables', 'a52'),
    exact: true
  },
  {
    path: '/hello-react',
    component: ComponentCreator('/hello-react', 'ca3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd99'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a59'),
    routes: [
      {
        path: '/docs/ImgBB API',
        component: ComponentCreator('/docs/ImgBB API', '769'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '050'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
