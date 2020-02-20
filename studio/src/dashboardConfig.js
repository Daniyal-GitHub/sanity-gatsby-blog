export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4ed8247a7bbd7853c929bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k4q1q6x2',
                  apiId: '0ceae1a8-d976-497b-83c1-c3039b6dcd8a'
                },
                {
                  buildHookId: '5e4ed824e67170d5225ce7d0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a8dmbgck',
                  apiId: '0f020e2d-1335-4af1-ae69-6ed2491ad1bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Daniyal-GitHub/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a8dmbgck.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
