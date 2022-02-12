<template>
    <div :class="menuDividerClassName" />
</template>
<script>
import { toRefs, computed, inject, ref } from 'vue'
export default {
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
            menuDividerClassName,
            baseCls
        }
    },
}
</script>