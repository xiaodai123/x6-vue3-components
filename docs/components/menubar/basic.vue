<template>
    <div style="height: 300px;">
        <div style="background: rgb(245, 245, 245); display: flex; height: 30px; line-height: 30px;">
            <X6Menubar>
                <X6MenubarItem text="File">
                    <X6Menu :onClick="onMenuClick">
                        <X6MenuItem name="newFile" hotkey="Cmd+N">
                            New File
                        </X6MenuItem>
                        <X6MenuItem name="newWindow" hotkey="Cmd+Shift+N">
                            New Window
                        </X6MenuItem>
                        <X6Divider />
                        <X6MenuItem name="open" hotkey="Cmd+O">
                            Open...
                        </X6MenuItem>
                        <X6MenuItem name="openWorkspace">Open Workspace...</X6MenuItem>
                        <X6Divider />
                        <X6MenuItem name="save" hotkey="Cmd+S">
                            Save
                        </X6MenuItem>
                        <X6MenuItem name="saveAs" hotkey="Cmd+Shift+S">
                            Save As...
                        </X6MenuItem>
                        <X6MenuItem name="saveAll" hotkey="Cmd+Alt+S">
                            Save All
                        </X6MenuItem>
                    </X6Menu>
                </X6MenubarItem>
                <X6MenubarItem text="Edit">
                    <X6Menu :onClick="onMenuClick">
                        <X6MenuItem name="undo" hotkey="Cmd+Z">
                            Undo
                        </X6MenuItem>
                        <X6MenuItem name="redo" hotkey="Cmd+Shift+Z">
                            Redo
                        </X6MenuItem>
                        <X6Divider />
                        <X6MenuItem name="cut" hotkey="Cmd+X">
                            Cut
                        </X6MenuItem>
                        <X6MenuItem name="copy" hotkey="Cmd+C">
                            Copy
                        </X6MenuItem>
                        <X6MenuItem name="paste" hotkey="Cmd+V" :disabled="true">
                            Paste
                        </X6MenuItem>
                        <X6Divider />
                        <X6MenuItem name="find" hotkey="Cmd+F">
                            Find
                        </X6MenuItem>
                        <X6MenuItem name="replace" hotkey="Cmd+Alt+F">
                            Replace
                        </X6MenuItem>
                    </X6Menu>
                </X6MenubarItem>
                <X6MenubarItem text="View">
                    <X6Menu :onClick="onMenuClick">
                        <X6MenuItem name="zen" hotkey="Cmd+K Z">
                            Zen Mode
                        </X6MenuItem>
                        <X6MenuItem name="fullscreen" hotkey="Cmd+Shift+F">
                            Full Screen
                        </X6MenuItem>
                        <X6Divider />
                        <X6SubMenu text="Appearance" arrow>
                            <X6MenuItem name="side-bar">Show Side Bar</X6MenuItem>
                            <X6MenuItem name="status-bar">Show Status Bar</X6MenuItem>
                            <X6MenuItem name="activity-bar">Show Activity Bar</X6MenuItem>
                            <X6MenuItem name="editor-area">Show Editor Area</X6MenuItem>
                            <X6MenuItem name="show-panel">Show Panel</X6MenuItem>
                        </X6SubMenu>
                        <X6Divider />
                        <X6MenuItem name="zoomin" hotkey="Cmd +">
                            Zoom In
                        </X6MenuItem>
                        <X6MenuItem name="zoomout" hotkey="Cmd -">
                            Zoom Out
                        </X6MenuItem>
                    </X6Menu>
                </X6MenubarItem>
                <X6MenubarItem text="Help">
                    <X6Menu :onClick="onMenuClick">
                        <X6MenuItem name="welcome">Welcome</X6MenuItem>
                        <X6MenuItem name="documention">Documention</X6MenuItem>
                        <X6MenuItem name="about">Aoubt</X6MenuItem>
                    </X6Menu>
                </X6MenubarItem>
                <template #extra>
                    <div>Extra Component</div>
                </template>
            </X6Menubar>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onMenuClick(name) {
            this.$message.success(name)
        }
    }
}
</script>