<template>
    <div :class="menuClassName">
        <slot></slot>
    </div>
</template>
<script>
import { ref, toRefs, computed, provide, reactive, defineComponent } from 'vue'
export default defineComponent({
    name: 'Menu',
    props: {
        className: {
            type: String,
            default: ''
        },
        border: {
            type: Boolean,
            default: false
        },
        hasIcon: {
            type: Boolean,
            default: false
        },
        stopPropagation: {
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function,
            default() {
                return (name) => {}
            }
        },
        autoHotkey: {
            type: Boolean,
            default: false
        },
        registerHotkey: {
            type: Function,
            default() {
                return (hotkey, handler = () => {}) => {}
            }
        },
        unregisterHotkey: {
            type: Function,
            default() {
                return (hotkey, handler = () => {}) => {}
            }
        }
    },
    setup(props) {
        let { className, unregisterHotkey, registerHotkey, autoHotkey, onClick, hasIcon, border, stopPropagation } = toRefs(props)
        let prefixCls = ref('x6')
        let baseCls = ref(`${prefixCls.value}-menu`)

        let menuClick = (name, event) => {
            if (stopPropagation.value && event != null) {
                event.stopPropagation()
            }

            if (onClick.value) {
                onClick.value(name, event)
            }
        }
        let registerHotkeyFn = (hotkey, handler = () => {}) => {
            if (registerHotkey.value) {
                registerHotkey.value(hotkey, handler)
            }
        }
        let unregisterHotkeyFn = (hotkey, handler = () => {}) => {
            if (unregisterHotkey.value) {
                unregisterHotkey.value(hotkey, handler)
            }
        }
        let menuContext = reactive({
            baseCls: baseCls.value,
            click: menuClick,
            registerHotkey: registerHotkeyFn,
            unregisterHotkey: unregisterHotkeyFn,
            autoHotkey: autoHotkey.value
        })
        provide('menuContext', menuContext)
        
        let menuClassName = computed(() => {
            return `${baseCls.value} 
            ${hasIcon.value ? baseCls.value + '-has-icon' : ''} 
            ${border.value ? baseCls.value + '-border' : ''} 
            ${className.value}
             `
        })
        return {
            baseCls,
            menuClassName
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-menu.scss';
</style>