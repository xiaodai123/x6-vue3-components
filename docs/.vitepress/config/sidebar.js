export default {
    '/': getDemoSidebar(),
}

function getDemoSidebar() {
    return [
        {
            text: "简介",
            link: "/components/introduction"
        },
        {
            text: "开发指南",
            link: "/components/guide"
        },
        {
            text: "组件",
            children: [
                // {
                //     text: "例子",
                //     link: "/components/button/"
                // },
                {
                    text: "X6Menu",
                    link: "/components/menu/"
                },
                {
                    text: "X6Dropdown",
                    link: "/components/dropdown/"
                },
                {
                    text: "X6ContextMenu",
                    link: "/components/contextmenu/"
                },
                {
                    text: "X6Menubar",
                    link: "/components/menubar/"
                },
                {
                    text: "X6Toolbar",
                    link: "/components/toolbar/"
                },
                {
                    text: "X6SplitBox",
                    link: "/components/splitbox/"
                },
                {
                    text: "X6Scrollbox",
                    link: "/components/scrollbox/"
                },
                {
                    text: "X6Tooltip",
                    link: "/components/tooltip/"
                },
                {
                    text: "X6ColorPicker",
                    link: "/components/colorPicker/"
                }
            ]
        }
    ]
}