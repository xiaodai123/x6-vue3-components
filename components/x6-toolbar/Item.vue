<template>
    <Dropdown v-if="slotDropdown" tAppendTo="parent">
        <button type="button" v-bind="buttonProps" :onClick="handleClick">
            <span v-if="icon && !slotIcon" :class="`${baseCls}-icon ${icon}`"></span>
            <slot v-if="slotIcon" name="icon"></slot>
            <span v-if="text && !slotDefault" :class="`${baseCls}-text`">
                {{text}}
            </span>
            <span v-if="slotDefault" :class="`${baseCls}-text`">
                <slot></slot>
            </span>
            <span v-if="dropdownArrow" :class="`${baseCls}-dropdown-arrow`" />
        </button>
        <Tooltip v-if="tooltip && !tooltipAsTitle && !disabled" placement="top">
            {{tooltip}}
        </Tooltip>
        <template #visible>
            <slot name="dropdown" :onClick="handleDropdownItemClick"></slot>
        </template>
    </Dropdown>
    <div v-else>
        <button type="button" v-bind="buttonProps" :onClick="handleClick">
            <span v-if="icon && !slotIcon" :class="`${baseCls}-icon ${icon}`"></span>
            <slot v-if="slotIcon" name="icon"></slot>
            <span v-if="text && !slotDefault" :class="`${baseCls}-text`">
                {{text}}
            </span>
            <span v-if="slotDefault" :class="`${baseCls}-text`">
                <slot></slot>
            </span>
            <span v-if="dropdownArrow" :class="`${baseCls}-dropdown-arrow`" />
        </button>
        <Tooltip v-if="tooltip && !tooltipAsTitle && !disabled" placement="bottom">
            {{tooltip}}
        </Tooltip>
    </div>
</template>
<script>
import { toRefs, inject, ref, reactive, defineComponent } from 'vue'
import Dropdown from '../x6-dropdown/Dropdown.vue'
import Tooltip from '../x6-tooltip/Tooltip.vue'
export default defineComponent({
    name: 'Item',
    components: {
        Dropdown,
        Tooltip
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
        hidden: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        tooltip: {
            type: String,
            default: ''
        },
        tooltipProps: {
            type: Object,
            default() {
                return {}
            }
        },
        tooltipAsTitle: {
            type: Boolean,
            default: false
        },
        dropdownArrow: {
            type: Boolean,
            default: false
        },
        dropdownProps: {
            type: Object,
            default() {
                return {}
            }
        },
        onClick: {
            type: Function,
            default() {
                return (name, value) => {}
            }
        }
    },
    setup(props, context) {
        let slotDefault = ref(!!context.slots.default)
        let slotIcon = ref(!!context.slots.icon)
        let slotDropdown = ref(!!context.slots.dropdown)
        let toolbarContext = inject('toolbarContext')
        let toolbarContextClick = toolbarContext.click
        let baseCls = toolbarContext.baseCls
        baseCls = `${baseCls}-item`
        let { icon, text, hidden, active, disabled, className, tooltip, tooltipAsTitle, dropdownArrow } = toRefs(props)
        let buttonProps = {
            class: `${baseCls} 
            ${hidden.value ? `${baseCls}-hidden` : ''} 
            ${active.value ? `${baseCls}-active` : ''} 
            ${disabled.value ? `${baseCls}-disabled` : ''} 
            ${slotDropdown.value ? `${baseCls}-dropdown` : ''} 
            ${className.value}
            `
        }
        if (tooltip.value && tooltipAsTitle.value) {
            buttonProps.title = tooltip.value
        }
        buttonProps = reactive(buttonProps)
        return {
            slotDefault,
            slotIcon,
            slotDropdown,
            toolbarContextClick,
            baseCls,
            buttonProps
        }
    },
    methods: {
        handleClick() {
            this.processClick()
        },
        handleDropdownItemClick(name) {
            this.processClick(name, false)
        },
        processClick(name = this.name, dropdown = this.slotDropdown) {
            if (!this.disabled && !dropdown) {
                if (name) {
                    this.toolbarContextClick(name)
                }

                if (this.onClick) {
                    this.onClick(name)
                }
            }
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-item.scss';
</style>