<template>
    <X6Menu border>
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
            <template #icon>
                <el-icon>
                    <delete />
                </el-icon>
            </template>
        </X6MenuItem>
    </X6Menu>
</template>
<style lang="scss">
.icon-test {
    background-image: url('./chicken.svg');
    background-size: 15px, 15px;
    background-repeat: no-repeat;
}
</style>