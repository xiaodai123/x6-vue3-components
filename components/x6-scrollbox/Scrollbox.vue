<template>
    <OverlayScrollbars :options="overlayScrollbarsOptions">
        <slot></slot>
    </OverlayScrollbars>
</template>
<script>
import { toRefs, reactive, defineComponent } from 'vue'
import OverlayScrollbars from '../overlayscrollbars-vue3/OverlayScrollbarsComponent.vue'
export default defineComponent({
    name: 'Scrollbox',
    components: {
        OverlayScrollbars
    },
    props: {
        className: {
            type: String,
            default: 'os-theme-dark'
        },
        resize: {
            type: String,
            default: 'none',
            validator(value) {
                return ['none', 'both', 'horizontal', 'vertical'].includes(value)
            }
        },
        sizeAutoCapable: {
            type: Boolean,
            default: true
        },
        clipAlways: {
            type: Boolean,
            default: true
        },
        normalizeRTL: {
            type: Boolean,
            default: true
        },
        paddingAbsolute: {
            type: Boolean,
            default: false
        },
        overflowBehaviorX: {
            type: String,
            default: 'scroll',
            validator(value) {
                return ['hidden', 'scroll', 'visible-hidden', 'visible-scroll'].includes(value)
            }
        },
        overflowBehaviorY: {
            type: String,
            default: 'scroll',
            validator(value) {
                return ['hidden', 'scroll', 'visible-hidden', 'visible-scroll'].includes(value)
            }
        },
        scrollbarsVisibility: {
            type: String,
            default: 'auto',
            validator(value) {
                return ['visible', 'hidden', 'auto'].includes(value)
            }
        },
        scrollbarsAutoHide: {
            type: String,
            default: 'never',
            validator(value) {
                return ['never', 'scroll', 'leave', 'move'].includes(value)
            }
        },
        scrollbarsAutoHideDelay: {
            type: Number,
            default: 800
        },
        initializedCb: {
            type: Function,
            default() {
                return () => {}
            }
        },
        destroyedCb: {
            type: Function,
            default() {
                return () => {}
            }
        },
        scrollStartCb: {
            type: Function,
            default() {
                return (eventArgs) => {}
            }
        },
        scrollCb: {
            type: Function,
            default() {
                return (eventArgs) => {}
            }
        },
        scrollStopCb: {
            type: Function,
            default() {
                return (eventArgs) => {}
            }
        }
    },
    setup(props) {
        let { className, resize, sizeAutoCapable, clipAlways
        , normalizeRTL, paddingAbsolute, overflowBehaviorX
        , overflowBehaviorY, scrollbarsVisibility, scrollbarsAutoHide
        , scrollbarsAutoHideDelay, initializedCb, destroyedCb
        , scrollStartCb, scrollCb, scrollStopCb } = toRefs(props)
        let overlayScrollbarsOptions = reactive({
            className: className.value,
            resize: resize.value,
            sizeAutoCapable: sizeAutoCapable.value,
            clipAlways: clipAlways.value,
            normalizeRTL: normalizeRTL.value,
            paddingAbsolute: paddingAbsolute.value,
            autoUpdate: null,
            autoUpdateInterval: 33, 
            updateOnLoad: ["img"],
            nativeScrollbarsOverlaid: {
                showNativeScrollbars: false,
                initialize: true 
            },
            overflowBehavior: {
                x: overflowBehaviorX.value,
                y: overflowBehaviorY.value
            },
            scrollbars: {
                visibility: scrollbarsVisibility.value,
                autoHide: scrollbarsAutoHide.value,
                autoHideDelay: scrollbarsAutoHideDelay.value,
                dragScrolling: true,
                clickScrolling: false,
                touchSupport: true,
                snapHandle: false
            },
            textarea: {
                dynWidth: false,
                dynHeight: false,
                inheritedAttrs: ["style", "class"]
            },
            callbacks: {
                onInitialized: initializedCb.value,
                onInitializationWithdrawn: null,
                onDestroyed: destroyedCb.value,
                onScrollStart: scrollStartCb.value,
                onScroll: scrollCb.value,
                onScrollStop: scrollStopCb.value,
                onOverflowChanged: null,
                onOverflowAmountChanged: null,
                onDirectionChanged: null,
                onContentSizeChanged: null,
                onHostSizeChanged: null,
                onUpdated: null
            }
        })
        return {
            overlayScrollbarsOptions
        }
    }

})
</script>
<style lang="scss">
@import '../theme-chalk/x6-scrollbox.scss';
</style>