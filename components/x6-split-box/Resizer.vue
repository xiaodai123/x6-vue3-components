<template>
    <div
        role="button"
        :style="styleProperties"
        ref="resizer"
      />
</template>
<script>
import addEventListener from 'add-dom-event-listener'
import { MouseMoveTracker } from '../util/dom/MouseMoveTracker'
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'Resizer',
    props: {
        styleProperties: {
            type: Object,
            default() {
                return {}
            }
        },
        click: {
            type: Function,
            default() {
                return (e) => {}
            }
        },
        doubleClick: {
            type: Function,
            default() {
                return (e) => {}
            }
        },
        mouseDown: {
            type: Function,
            default() {
                return (e) => {}
            }
        },
        mouseMove: {
            type: Function,
            default() {
                return (deltaX, deltaY, pos) => {}
            }
        },
        mouseMoveEnd: {
            type: Function,
            default() {
                return () => {}
            }
        }
    },
    setup() {
        let mouseMoveTracker = ref('')
        return {
            mouseMoveTracker
        }
    },
    mounted() {
        this.mouseMoveTracker = new MouseMoveTracker({
            onMouseMove: this.onMouseMove,
            onMouseMoveEnd: this.onMouseMoveEnd,
        })
        addEventListener(this.$refs.resizer, 'click', this.onClick)
        addEventListener(this.$refs.resizer, 'mousedown', this.onMouseDown)
        addEventListener(this.$refs.resizer, 'doubleclick', this.onDoubleClick)
    },
    beforeUnmount() {
        this.mouseMoveTracker.release()
    },
    methods: {
        onMouseDown(e) {
            this.mouseMoveTracker.capture(e)
            this.mouseDown(e)
        },
        onMouseMove(deltaX = 0, deltaY = 0, pos) {
            if (this.mouseMove != null) {
                this.mouseMove(deltaX, deltaY, pos)
            }
        },
        onMouseMoveEnd() {
            this.mouseMoveTracker.release()
            if (this.mouseMoveEnd != null) {
                this.mouseMoveEnd()
            }
        },
        onClick(e) {
            if (this.click) {
                this.click(e)
            }
        },
        onDoubleClick(e) {
            if (this.doubleClick) {
                this.doubleClick(e)
            }
        }
    }
})
</script>