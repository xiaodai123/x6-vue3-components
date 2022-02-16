import { mdPlugin } from './config/plugins'
import nav from './config/nav'
import sidebar from './config/sidebar'
module.exports = {
    title: 'X6 Vue3 Components',
    description: 'Vue3 components for building x6 editors',
    lang: 'en-US',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.png',
            }
        ]
    ],
    themeConfig: {
        logo: '/favicon.png',
        docsDir: 'docs',
        algolia: {
            apiKey: '377f2b647a96d9b1d62e4780f2344da2',
            appId: 'BH4D9OD16A'
        },
        nav,
        sidebar
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
    
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },

        config: (md) => mdPlugin(md),
    }
}

