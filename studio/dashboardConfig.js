export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6239b6357074655b11735155',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uu1davo7',
                  apiId: 'a486a003-1523-45a7-89d0-f23308b2868e'
                },
                {
                  buildHookId: '6239b63670746552087355f5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t6sam1d2',
                  apiId: '7fcf7567-f546-4c37-bfce-978d5afb881d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CptCompiler/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t6sam1d2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
