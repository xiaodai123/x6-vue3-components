<template>
    <div :class="groupClassName">
        <slot></slot>
    </div>
</template>
<script>
import { toRefs, computed, inject, defineComponent } from 'vue'
export default defineComponent({
    name: 'Group',
    props: {
        className: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        let { className } = toRefs(props)
        let toolbarContext = inject('toolbarContext')
        let groupClassName = computed(() => {
            return `${toolbarContext.baseCls}-group ${className.value}`
        })
        return {
            groupClassName
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-group.scss';
</style>