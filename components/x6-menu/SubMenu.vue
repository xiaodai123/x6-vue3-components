<template>
    <div :class="subMenuClassName">
        <Dropdown placement="right" :tAnimateFill="arrow" trigger="mouseenter focus">
            <button type="button" :class="`${baseCls}-button`">
                <span v-if="icon && !slotIcon" :class="`${baseCls}-icon ${icon}`"></span>
                <span v-if="slotIcon" :class="`${baseCls}-icon`">
                    <slot name="icon"></slot>
                </span>
                <span v-if="text || slotDefault" :class="`${baseCls}-text`">
                    <span v-if="text">{{text}}</span>
                    <slot v-else></slot>
                </span>
                <span :class="`${prefixCls}-submenu-arrow`" />
            </button>
            <template #visible>
                <slot></slot>
            </template>
        </Dropdown>
        <!-- <button type="button" :class="`${baseCls}-button`">
            <span v-if="icon && !slotIcon" :class="`${baseCls}-icon ${icon}`"></span>
            <span v-if="slotIcon" :class="`${baseCls}-icon`">
                <slot name="icon"></slot>
            </span>
            <span v-if="text || slotDefault" :class="`${baseCls}-text`">
                <span v-if="text">{{text}}</span>
                <slot v-else></slot>
            </span>
            <span :class="`${prefixCls}-submenu-arrow`" />
        </button> -->
        <!-- <div :class="`${prefixCls}-submenu-menu`">
            <slot></slot>
        </div> -->
    </div>
</template>
<script>
import { toRefs, computed, inject, ref, defineComponent } from 'vue'
import Dropdown from '../x6-dropdown/Dropdown.vue'
export default defineComponent({
    name: 'SubMenu',
    components: {
        Dropdown
    },
    props: {
        className: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        hidden: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        let slotIcon = ref(!!context.slots.icon)
        let { className, active, hidden, disabled } = toRefs(props)
        let menuContext = inject('menuContext')
        let prefixCls = menuContext.baseCls
        let baseCls = `${prefixCls}-item`
        let subMenuClassName = computed(() => {
            return `${baseCls} ${className.value} 
            ${prefixCls}-submenu 
            ${active.value ? baseCls + '-active' : ''} 
            ${hidden.value ? baseCls + '-hidden' : ''} 
            ${disabled.value ? baseCls + '-disabled' : ''}
             `
        })
        return {
            prefixCls,
            baseCls,
            subMenuClassName,
            slotIcon
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-sub-menu.scss';
</style>