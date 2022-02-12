<template>
    <div :className="groupClassName">
        <slot></slot>
    </div>
</template>
<script>
import { toRefs, computed, inject } from 'vue'
export default {
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
}
</script>