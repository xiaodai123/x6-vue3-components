import { mdPlugin } from './config/plugins'
import nav from './config/nav'
import sidebar from './config/sidebar'
module.exports = {
    title: 'X6 Vue3 Components',
    description: 'Vue3 components for building x6 editors',
    base: '/x6-vue3-components/',
    lang: 'en-US',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/x6-vue3-components/favicon.png',
            }
        ]
    ],
    themeConfig: {
        logo: '/favicon.png',
        docsDir: 'docs',
        // algolia: {
        //     apiKey: '8c1a3c4e177b8cbd2c7df09c80bd9fb8',
        //     appId: 'B45Y19Z2OS',
        //     indexName: 'x6-vue3-components'
        // },
        nav,
        sidebar
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { 
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        },
    
        // options for markdown-it-toc
        // toc: { includeLevel: [1, 2] },

        config: (md) => mdPlugin(md),
    }
}

