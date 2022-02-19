<template>
    <div :style="demoStyle">
        <X6ContextMenu :tAnimateFill="true">
            <div>
                Right Click On Me
            </div>
            <template #menu>
                <X6Menu>
                    <X6MenuItem key="1">1st menu item</X6MenuItem>
                    <X6MenuItem key="2">2nd menu item</X6MenuItem>
                    <X6MenuItem key="3">3rd menu item</X6MenuItem>
                </X6Menu>
            </template>
        </X6ContextMenu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            demoStyle: {
                width: '100%',
                height: '240px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f5f5f5',
                userSelect: 'none'
            }
        }
    }
}
</script>