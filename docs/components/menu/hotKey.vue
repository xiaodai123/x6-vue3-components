<template>
    <div style="display: flex;justify-content: space-around;">
        <div>
            <p style="font-weight: 800;">autoHotkey开启Undo菜单热键</p>
            <X6Menu autoHotkey border :onClick="clickEvent">
                <X6MenuItem icon="icon-test" name="undo" hotkey="Ctrl+Z">Undo</X6MenuItem>
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
        </div>
        <div>
            <p style="font-weight: 800;">registerHotkey开启Cut菜单热键</p>
            <X6Menu :registerHotkey="registerHotkey" border :onClick="clickEvent">
                <X6MenuItem icon="icon-test" name="undo">Undo</X6MenuItem>
                <X6MenuItem name="redo">
                    Redo
                </X6MenuItem>
                <X6MenuItem name="cut" hotkey="Ctrl+X">Cut</X6MenuItem>
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
        </div>
    </div>
</template>
<script>
import hotkeys from 'hotkeys-js'
export default {
    name: 'HotKey',
    methods: {
        clickEvent(name) {
            this.$message.success(name)
        },
        registerHotkey(hotkey, handle) {
            hotkeys(hotkey.toLowerCase(), () => {
                handle()
            })
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