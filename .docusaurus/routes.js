import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/PwshBlog/blog',
    component: ComponentCreator('/PwshBlog/blog', '73d'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/archive',
    component: ComponentCreator('/PwshBlog/blog/archive', 'a3a'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/first-blog-post',
    component: ComponentCreator('/PwshBlog/blog/first-blog-post', '9ba'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/long-blog-post',
    component: ComponentCreator('/PwshBlog/blog/long-blog-post', '8b6'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/mdx-blog-post',
    component: ComponentCreator('/PwshBlog/blog/mdx-blog-post', '6eb'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/tags',
    component: ComponentCreator('/PwshBlog/blog/tags', '5d9'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/tags/docusaurus',
    component: ComponentCreator('/PwshBlog/blog/tags/docusaurus', '07d'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/tags/facebook',
    component: ComponentCreator('/PwshBlog/blog/tags/facebook', '197'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/tags/hello',
    component: ComponentCreator('/PwshBlog/blog/tags/hello', 'e62'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/tags/hola',
    component: ComponentCreator('/PwshBlog/blog/tags/hola', '504'),
    exact: true
  },
  {
    path: '/PwshBlog/blog/welcome',
    component: ComponentCreator('/PwshBlog/blog/welcome', '1e2'),
    exact: true
  },
  {
    path: '/PwshBlog/hello-react',
    component: ComponentCreator('/PwshBlog/hello-react', '3e9'),
    exact: true
  },
  {
    path: '/PwshBlog/markdown-page',
    component: ComponentCreator('/PwshBlog/markdown-page', '111'),
    exact: true
  },
  {
    path: '/PwshBlog/docs',
    component: ComponentCreator('/PwshBlog/docs', '3f9'),
    routes: [
      {
        path: '/PwshBlog/docs/category/tutorial---basics',
        component: ComponentCreator('/PwshBlog/docs/category/tutorial---basics', '942'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/category/tutorial---extras',
        component: ComponentCreator('/PwshBlog/docs/category/tutorial---extras', 'a90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/intro',
        component: ComponentCreator('/PwshBlog/docs/intro', 'd6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/PwshBlog/docs/tutorial-basics/congratulations', '2de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/PwshBlog/docs/tutorial-basics/create-a-blog-post', '3c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/PwshBlog/docs/tutorial-basics/create-a-document', 'd68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/PwshBlog/docs/tutorial-basics/create-a-page', 'd90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/PwshBlog/docs/tutorial-basics/deploy-your-site', '96e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/PwshBlog/docs/tutorial-basics/markdown-features', 'a57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/PwshBlog/docs/tutorial-extras/manage-docs-versions', '429'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PwshBlog/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/PwshBlog/docs/tutorial-extras/translate-your-site', '4bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/PwshBlog/',
    component: ComponentCreator('/PwshBlog/', '031'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
