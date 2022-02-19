<template>
    <div :class="menuDividerClassName"></div>
</template>
<script>
import { computed, inject, defineComponent } from 'vue'
export default defineComponent({
    name: 'Divider',
    setup() {
        let menuContext = inject('menuContext')
        let baseCls = menuContext.baseCls
        let menuDividerClassName = computed(() => {
            return `${baseCls}-item 
            ${baseCls}-item-divider
             `
        })
        return {
            menuDividerClassName
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-divider.scss';
</style>