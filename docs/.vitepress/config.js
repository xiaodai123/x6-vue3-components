import { mdPlugin } from './config/plugins'
module.exports = {
    title: 'X6 Vue3 Components',
    description: 'Vue3 components for building x6 editors',
    lang: 'en-US',
    themeConfig: {
        logo: '/images/antv-x6-logo.svg',
        docsDir: 'docs',
        algolia: {
            apiKey: '377f2b647a96d9b1d62e4780f2344da2',
            appId: 'BH4D9OD16A'
        },
        nav: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/xiaodai123/x6-vue3-components',
            }
        ],
        sidebar: {
            '/': getDemoSidebar(),
        }
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
    
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },
    
        // config: (md) => {
        //     const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        //     md.use(demoBlockPlugin, {
        //         cssPreprocessor: 'scss'
        //     })
        // }
        config: (md) => mdPlugin(md),
    }
}

function getDemoSidebar() {
    return [
      {
        text: "介绍"
      },
      {
        text: "更新日志",
        children: [{
          text: "新特性",
          link: "/examples/log/"
        }]
      },
      {
        text: "开发指南",
        children: [{
          text: "安装"
        }]
      },
      {
        text: "快速开始",
        link: "/"
      },
      {
        text: "基础组件",
        children: [{
            text: "Button 按钮",
            link: "/examples/button/"
          },
          {
            text: "Icon 图标",
            link: "/examples/icon/"
          },
        ],
      },
      {
        text: "布局组件",
      },
    ]
  }