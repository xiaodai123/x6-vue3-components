<template>
    <X6Toolbar :onClick="clickToolbar">
        <X6Group>
            <X6Item name="file" text="文件">
                <template #icon>
                    <el-icon>
                        <files />
                    </el-icon>
                </template>
                <template #dropdown="scope">
                    <X6Menu :onClick="scope.onClick">
                        <X6MenuItem name="undo">Undo</X6MenuItem>
                        <X6MenuItem name="redo">Redo</X6MenuItem>
                        <X6MenuItem name="cut">Cut</X6MenuItem>
                        <X6Divider/>
                        <X6MenuItem name="copy">Copy</X6MenuItem>
                        <X6MenuItem name="paste">Paste</X6MenuItem>
                        <X6MenuItem name="delete">Delete</X6MenuItem>
                    </X6Menu>
                </template>
            </X6Item>
            <X6Item name="edit">
                <X6ContextMenu :tAnimateFill="true" dropdownArrow>
                    编辑
                    <template #menu>
                        <X6Menu>
                            <X6MenuItem key="1">1st menu item</X6MenuItem>
                            <X6MenuItem key="2">2nd menu item</X6MenuItem>
                            <X6MenuItem key="3">3rd menu item</X6MenuItem>
                        </X6Menu>
                    </template>
                </X6ContextMenu>
            </X6Item>
        </X6Group>
        <template #extra>
            Here
        </template>
    </X6Toolbar>
</template>
<script>
export default {
    methods: {
        clickToolbar(name) {
            this.$message.success(name)
        }
    }
}
</script>