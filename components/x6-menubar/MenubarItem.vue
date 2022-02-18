<template>
    <div :class="menubarItemClass" ref="menubarItem">
        <div :class="menubarItemTextClass" ref="menubarItemText">
            {{text}}
        </div>
        <div :class="popupClassName">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { toRefs, computed, inject, ref, defineComponent } from 'vue'
import addEventListener from 'add-dom-event-listener'
let cacheDeactiveMap = new WeakMap()
export default defineComponent({
    name: 'MenubarItem',
    props: {
        text: {
            type: String,
            default: ''
        },
        hidden: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        let { hidden } = toRefs(props)
        // let menubarActived = inject('menubarActived')
        let menubarActived = ref(true)
        let menubarContext = inject('menubarContext')
        let activeMenubar = menubarContext.activeMenubar
        let prefixCls = menubarContext.baseCls
        let active = ref(false)
        let popupClassName = `${prefixCls}-item-dropdown`
        let baseCls = `${prefixCls}-item`
        let removeDocClickEvent = ref('')
        let currentMenuActived = computed(() => {
            return menubarActived.value && active.value
        })
        let menubarItemClass = computed(() => {
            return `${baseCls} 
            ${hidden.value ? baseCls + '-hidden ' : ''}
            ${menubarActived.value ? baseCls + '-hover ' : ''}
            ${currentMenuActived.value ? baseCls + '-active' : ''}
            `
        })
        let menubarItemTextClass = computed(() => {
            return `${baseCls}-text 
            ${currentMenuActived.value ? baseCls + '-text-active' : ''}
            `
        })
        return {
            activeMenubar,
            menubarActived,
            active,
            popupClassName,
            removeDocClickEvent,
            currentMenuActived,
            menubarItemClass,
            menubarItemTextClass
        }
    },
    mounted() {
        addEventListener(this.$refs.menubarItem, 'mouseenter', this.onMouseEnter)
        addEventListener(this.$refs.menubarItem, 'mouseleave', this.onMouseLeave)
        addEventListener(this.$refs.menubarItemText, 'click', this.onClick)
    },
    methods: {
        onDocumentClick(event) {
            let targetClassList = event.target.classList
            if (targetClassList.contains('x6-menubar-item') || targetClassList.contains('x6-menubar-item-text')) {
                return
            }
            this.deactiveFn()
        },
        onClick(e) {
            this.activeMenubar()
            this.removeDeactive(e.currentTarget.parentElement)
            this.activeFn()
        },
        isPrevMenuHiddening(e) {
            let toElement = e.nativeEvent.toElement
            if (toElement && toElement.className === this.popupClassName) {
                return true
            }

            let currentTarget = e.currentTarget
            let childNodes = []
            if (currentTarget.parentElement) {
                childNodes = currentTarget.parentElement.childNodes || []
            }
            for (let i = 0, l = childNodes.length; i < l; i += 1) {
                let child = childNodes[i]
                if (child.nodeType == 3) continue
                let popupElem = child.querySelector(`.${this.popupClassName}`)
                if (popupElem && popupElem.contains(toElement)) {
                    return true
                }
            }

            return false
        },
        onMouseEnter(e) {
            if (this.menubarActived && !this.active && !this.isPrevMenuHiddening(e)) {
                let currentTarget = e.currentTarget
                let childNodes = []
                if (currentTarget.parentElement) {
                    childNodes = currentTarget.parentElement.childNodes || []
                }

                childNodes.forEach((child) => {
                    if (child === currentTarget) {
                        this.removeDeactive(child)
                    } else {
                        this.callDeactive(child)
                    }
                })

                this.activeFn()
            }
        },
        onMouseLeave(e) {
            let relatedTarget = e.relatedTarget
            let currentTarget = e.currentTarget

            if (this.menubarActived && this.active) {
                let childNodes = []
                if (currentTarget.parentElement) {
                    childNodes = currentTarget.parentElement.childNodes || []
                }
                let shoudDeactive = false
                if (relatedTarget !== window) {
                    for (let i = 0, l = childNodes.length; i < l; i += 1) {
                        const child = childNodes[i]
                        if (
                            child === relatedTarget ||
                            child.contains(relatedTarget)
                        ) {
                            shoudDeactive = true
                            break
                        }
                    }
                }

                if (shoudDeactive) {
                    this.deactiveFn()
                } else {
                    // 缓存一下，当再次 hover 到其他菜单时被调用
                    this.cacheDeactive(currentTarget)
                }
            }
        },
        cacheDeactive(elem) {
            cacheDeactiveMap.set(elem, this.deactiveFn)
        },
        callDeactive(elem) {
            if (cacheDeactiveMap.has(elem)) {
                cacheDeactiveMap.get(elem)()
                cacheDeactiveMap.delete(elem)
            }
        },
        removeDeactive(elem) {
            cacheDeactiveMap.delete(elem)
        },
        activeFn() {
            this.active = true
            if (!this.removeDocClickEvent) {
                this.removeDocClickEvent = addEventListener(
                    document.documentElement,
                    'click',
                    this.onDocumentClick,
                ).remove
            }
        },
        deactiveFn() {
            this.active = false
            if (this.removeDocClickEvent) {
                this.removeDocClickEvent()
                this.removeDocClickEvent = ''
            }
        }
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-menubar-item.scss';
</style>