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
                {
                    text: "Menu",
                    link: "/components/button/"
                },
                {
                    text: "Dropdown",
                    link: "/components/button/"
                },
                {
                    text: "ContextMenu",
                    link: "/components/button/"
                },
                {
                    text: "Menubar",
                    link: "/components/button/"
                },
                {
                    text: "Toolbar",
                    link: "/components/button/"
                },
                {
                    text: "SplitBox",
                    link: "/components/button/"
                },
                {
                    text: "Scrollbox",
                    link: "/components/button/"
                },
                {
                    text: "ColorPicker",
                    link: "/components/button/"
                }
            ]
        }
    ]
}