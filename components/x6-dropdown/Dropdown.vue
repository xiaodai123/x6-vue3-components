<template>
    <div :class="`${baseCls}-trigger`">
        <slot></slot>
        <Tooltip v-bind="tooltipProps">
            <slot name="visible"></slot>
        </Tooltip>
    </div>
</template>
<script>

import { ref, toRefs, reactive, defineComponent } from 'vue'
import Tooltip from '../x6-tooltip/Tooltip.vue'
export default defineComponent({
    name: 'Dropdown',
    components: {
        Tooltip
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
            default() {
                return () => document.body
            }
        },
        tTheme: {
            type: String,
            default: 'light'
        },
        tAnimateFill: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        let { tTheme, tAnimateFill, className, trigger, tAppendTo, visible, transitionName, placement, mouseEnterDelay, mouseLeaveDelay } = toRefs(props)
        let prefixCls = ref('x6')
        let baseCls = ref(`${prefixCls.value}-dropdown`)
        let hideOnClick = ref(false)
        if (trigger.value != 'manual') {
            hideOnClick.value = true
        }
        let tooltipProps = reactive({
            class: `${baseCls.value} ${className.value}`,
            trigger: trigger.value,
            visible: visible.value,
            animation: transitionName.value,
            placement: placement.value,
            delay: [mouseEnterDelay.value, mouseLeaveDelay.value],
            hideOnClick: hideOnClick.value,
            tTheme: tTheme.value,
            tAppendTo: tAppendTo.value,
            interactive: true,
            tAnimateFill: tAnimateFill.value
        })
        return {
            baseCls,
            tooltipProps
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-dropdown.scss';
</style>