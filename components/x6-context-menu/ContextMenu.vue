<template>
    <Dropdown v-bind="$props" placement="bottom-start" trigger="contextMenu">
        <slot></slot>
        <template #visible>
            <slot name="menu"></slot>
        </template>
    </Dropdown>
</template>
<script>
import { defineComponent } from 'vue'
import Dropdown from '../x6-dropdown/Dropdown.vue'
export default defineComponent({
    name: 'ContextMenu',
    components: {
        Dropdown
    },
    props: {
        className: {
            type: String,
            default: ''
        },
        trigger: {
            type: String,
            default: 'click' // contextMenu, mouseenter focus, click, focusin, mouseenter click, manual
        },
        visible: {
            type: Boolean,
            default: false
        },
        transitionName: {
            type: String,
            default: 'shift-away' // 'shift-away' 'shift-toward' 'perspective' 'fade' 'scale'
        },
        placement: {
            type: String,
            default: 'bottom' // 'top' 'bottom' 'left' 'right'
        },
        mouseEnterDelay: {
            type: Number,
            default: 0.15
        },
        mouseLeaveDelay: {
            type: Number,
            default: 0.1
        },
        tAppendTo: {
            type: [String, Function],
            default: 'parent'
        },
        tTheme: {
            type: String,
            default: 'light-border'
        },
        tAnimateFill: {
            type: Boolean,
            default: false
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-context-menu.scss';
</style>