<script>
import { toRefs, computed, inject, provide, ref, reactive } from 'vue'
import Dropdown from '../dropdown/Dropdown.vue'
import Tooltip from '../tooltip/Tooltip.vue'
export default {
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
    data() {
        return {
            slotDropdown: false,
            toolbarContextClick: (name) => {}
        }
    },
    render() {
        let slotDefault = ref(!!this.$slots.default)
        let slotIcon = ref(!!this.$slots.icon)
        let slotDropdown = ref(!!this.$slots.dropdown)
        this.slotDropdown = slotDropdown
        let toolbarContext = inject('toolbarContext')
        let toolbarContextClick = toolbarContext.click
        this.toolbarContextClick = toolbarContextClick
        let baseCls = toolbarContext.baseCls
        baseCls = `${baseCls}-item`


        let { icon, text, hidden, active, disabled, className, tooltip, tooltipAsTitle, dropdownArrow } = this.$props
        
        let buttonProps = {
            onClick: this.handleClick,
            class: `${baseCls} 
            ${hidden ? `${baseCls}-hidden` : ''} 
            ${active ? `${baseCls}-active` : ''} 
            ${disabled ? `${baseCls}-disabled` : ''} 
            ${slotDropdown.value ? `${baseCls}-dropdown` : ''} 
            ${className}
            `
        }
        if (tooltip && tooltipAsTitle) {
            buttonProps.title = tooltip
        }

        let button = (
            <button type="button" {...buttonProps}>
                {icon && !slotIcon.value && (<span class={`${baseCls}-icon ${icon}`}></span>)}
                {slotIcon.value && this.$slots.icon()}
                {text && !slotDefault.value && (<span class={`${baseCls}-text`}>
                    {text}
                </span>)}
                {slotDefault.value && (<span class={`${baseCls}-text`}>
                    {this.$slots.default()}
                </span>)}
                {dropdownArrow && (<span class={`${baseCls}-dropdown-arrow`} />)}
            </button>
        )
        if (tooltip && !tooltipAsTitle && !disabled) {
            button = (
                <>
                    {button}
                    <Tooltip placement="bottom">
                        {tooltip}
                    </Tooltip>
                </>
            )
        }
        return (
            <>
                {slotDropdown.value ? (<Dropdown tAnimateFill={true} tAppendTo='parent' v-slots={{
                    visible: () => (
                        this.$slots.dropdown({
                            onClick: this.handleDropdownItemClick
                        })
                    )
                }}>{button}
                </Dropdown>) : button}
            </>
        )
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
}
</script>