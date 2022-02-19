<template>
    <Dropdown v-bind="$props" placement="bottom-start" trigger="contextmenu">
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
        visible: {
            type: Boolean,
            default: false
        },
        transitionName: {
            type: String,
            default: 'shift-away', // 'shift-away' 'shift-toward' 'perspective' 'fade' 'scale'
            validator(value) {
                return ['shift-away', 'shift-toward', 'perspective', 'fade', 'scale'].includes(value)
            }
        },
        placement: {
            type: String,
            default: 'bottom', // 'top' 'bottom' 'left' 'right'
            validator(value) {
                return ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'].includes(value)
            }
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
            default() {
                return () => document.body
            }
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