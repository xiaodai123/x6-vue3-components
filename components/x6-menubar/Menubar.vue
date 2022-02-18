<template>
    <div :class="menubarClass">
        <div :class="`${baseCls}-content`">
            <div :class="`${baseCls}-content-inner`">
                <slot></slot>
            </div>
            <div v-if="slotExtra" :class="`${baseCls}-content-extras`">
                <slot name="extra">
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
import addEventListener from 'add-dom-event-listener'
import { ref, toRefs, computed, provide, reactive, defineComponent } from 'vue'
export default defineComponent({
    name: 'Menubar',
    props: {
        className: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        let { className } = toRefs(props)
        let prefixCls = ref('x6')
        let baseCls = ref(`${prefixCls.value}-menubar`)
        let menubarClass = computed(() => {
            return `${baseCls.value} ${className.value}`
        })
        let active = ref(false)
        let slotExtra = ref(!!context.slots.extra)

        let removeDocClickEvent = ref('')

        let onDocumentClick = () => {
            // active.value = false
            unbindDocEvent()
        }

        let unbindDocEvent = () => {
            if (removeDocClickEvent.value) {
                removeDocClickEvent.value()
                removeDocClickEvent.value = ''
            }
        }

        let activeMenubar = () => {
            active.value = true
            if (!removeDocClickEvent.value) {
                removeDocClickEvent.value = addEventListener(
                    document.documentElement,
                    'click',
                    onDocumentClick,
                ).remove
            }
        }

        let menubarActived = computed(() => {
            return active.value === true
        })
        let menubarContext = reactive({
            baseCls: baseCls.value,
            activeMenubar
        })
        provide('menubarContext', menubarContext)
        provide('menubarActived', menubarActived)
        return {
            prefixCls,
            baseCls,
            menubarClass,
            active,
            slotExtra
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-menubar.scss';
</style>