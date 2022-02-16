export default {
    '/': getDemoSidebar(),
}

function getDemoSidebar() {
    return [
        {
            text: "简介"
        },
        {
            text: "开发指南"
        },
        {
            text: "组件",
            children: [
                {
                    text: "Menu",
                    link: "/examples/button/"
                },
                {
                    text: "Dropdown",
                    link: "/examples/button/"
                },
                {
                    text: "ContextMenu",
                    link: "/examples/button/"
                },
                {
                    text: "Menubar",
                    link: "/examples/button/"
                },
                {
                    text: "Toolbar",
                    link: "/examples/button/"
                },
                {
                    text: "SplitBox",
                    link: "/examples/button/"
                },
                {
                    text: "Scrollbox",
                    link: "/examples/button/"
                },
                {
                    text: "ColorPicker",
                    link: "/examples/button/"
                }
            ]
        }
    ]
}