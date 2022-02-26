<template>
    <div :class="menuItemClassName">
        <button type="button" :class="`${baseCls}-button`" @click="menuItemClick($event)">
            <span v-if="icon && !slotIcon" :class="`${baseCls}-icon ${icon}`"></span>
            <span v-if="slotIcon" :class="`${baseCls}-icon`">
                <slot name="icon"></slot>
            </span>
            <span v-if="text || slotDefault" :class="`${baseCls}-text`">
                <span v-if="text">{{text}}</span>
                <slot v-else></slot>
            </span>
            <span v-if="hotkey" :class="`${baseCls}-hotkey`">{{hotkey}}</span>
        </button>
    </div>
</template>
<script>
import { toRefs, computed, inject, ref, defineComponent } from 'vue'
import hotkeys from 'hotkeys-js'
export default defineComponent({
    name: 'MenuItem',
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
        hotkey: {
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
        onClick: {
            type: Function,
            default() {
                return () => {}
            }
        }
    },
    setup(props, context) {
        let slotDefault = ref(!!context.slots.default)
        let slotIcon = ref(!!context.slots.icon)
        let { className, active, hidden, disabled } = toRefs(props)
        let menuContext = inject('menuContext')
        let menuContextClick = menuContext.click
        let baseCls = menuContext.baseCls
        baseCls = `${baseCls}-item`
        let registerHotkey = menuContext.registerHotkey
        let unregisterHotkey = menuContext.unregisterHotkey
        let autoHotkey = menuContext.autoHotkey
        let menuItemClassName = computed(() => {
            return `${baseCls} ${className.value} 
            ${active.value ? baseCls + '-active' : ''} 
            ${hidden.value ? baseCls + '-hidden' : ''} 
            ${disabled.value ? baseCls + '-disabled' : ''}
             `
        })

        return {
            slotDefault,
            slotIcon,
            menuContextClick,
            baseCls,
            registerHotkey,
            unregisterHotkey,
            autoHotkey,
            menuItemClassName
        }
    },
    mounted() {
        let hotkey = this.hotkey
        if (hotkey) {
            if (this.autoHotkey) {
                hotkeys(hotkey.toLowerCase(), (event) => {
                    event.preventDefault()
                    this.onHotkey(event)
                })
            } else {
                this.registerHotkey(hotkey, this.onHotkey)
            }
        }
    },
    beforeUnmount() {
        let hotkey = this.hotkey
        if (hotkey) {
            if (this.autoHotkey) {
                hotkeys.unbind(hotkey.toLowerCase());
            } else {
                this.unregisterHotkey(hotkey, this.onHotkey)
            }
        }
    },
    methods: {
        onHotkey(event) {
            this.triggerHandler(event)
        },
        menuItemClick(e) {
            this.triggerHandler(e)
        },
        triggerHandler(e) {
            if (!this.disabled && !this.hidden) {
                if (this.name && this.menuContextClick) {
                    this.menuContextClick(this.name, e)
                }

                if (this.onClick) {
                    this.onClick(event)
                }
            }
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-menu-item.scss';
</style>