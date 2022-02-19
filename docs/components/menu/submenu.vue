<template>
    <X6Menu border :onClick="clickEvent">
        <X6MenuItem icon="icon-test" name="undo">Undo</X6MenuItem>
        <X6MenuItem name="redo">
            Redo
        </X6MenuItem>
        <X6MenuItem name="cut">Cut</X6MenuItem>
        <X6Divider/>
        <X6MenuItem name="copy">Copy</X6MenuItem>
        <X6MenuItem name="paste">Paste</X6MenuItem>
        <X6MenuItem name="delete">
            Delete
        </X6MenuItem>
        <X6SubMenu text="Appearance" arrow>
            <template #icon>
                <el-icon>
                    <delete />
                </el-icon>
            </template>
            <X6MenuItem name="side-bar">Show Side Bar</X6MenuItem>
            <X6MenuItem name="status-bar">Show Status Bar</X6MenuItem>
            <X6MenuItem name="activity-bar">Show Activity Bar</X6MenuItem>
            <X6MenuItem name="editor-area">Show Editor Area</X6MenuItem>
            <X6MenuItem name="show-panel">Show Panel</X6MenuItem>
        </X6SubMenu>
    </X6Menu>
</template>
<script>
export default {
    name: 'Submenu',
    methods: {
        clickEvent(name) {
            this.$message.success(name)
        }
    }
}
</script>
<style lang="scss">
.icon-test {
    background-image: url('./chicken.svg');
    background-size: 15px, 15px;
    background-repeat: no-repeat;
}
</style>