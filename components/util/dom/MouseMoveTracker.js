import addEventListener from 'add-dom-event-listener'
import { requestAnimationFrame, cancelAnimationFrame } from './animationFrame'

export class MouseMoveTracker {
    elem = null;

    clientX = 0;

    clientY = 0;

    deltaX = 0;

    deltaY = 0;

    dragging = false;

    captured = false;

    animationFrameID = null;

    removeMouseMoveEvent = () => {};

    removeMouseUpEvent = () => {};

    onMouseMoveCallback = (deltaX, deltaY, pos) => {};

    onMouseMoveEndCallback = (cancel = false) => {};

    constructor(options) {
        this.elem = options.elem || document.documentElement
        this.onMouseMoveCallback = options.onMouseMove
        this.onMouseMoveEndCallback = options.onMouseMoveEnd
        this.animationFrameID = null
    }

    capture(e) {
        if (!this.captured) {
            this.removeMouseMoveEvent = addEventListener(
                this.elem,
                'mousemove',
                this.onMouseMove,
            ).remove
            this.removeMouseUpEvent = addEventListener(
                this.elem,
                'mouseup',
                this.onMouseUp,
            ).remove
        }

        this.captured = true

        if (!this.dragging) {
            this.clientX = e.clientX
            this.clientY = e.clientY
            this.deltaX = 0
            this.deltaY = 0
            this.dragging = true
        }

        e.preventDefault()
    }

    release() {
        if (this.captured) {
            if (this.removeMouseMoveEvent != null) {
                this.removeMouseMoveEvent()
                this.removeMouseMoveEvent = null
            }

            if (this.removeMouseUpEvent != null) {
                this.removeMouseUpEvent()
                this.removeMouseUpEvent = null
            }
        }

        this.captured = false

        if (this.dragging) {
            this.dragging = false
            this.clientX = 0
            this.clientY = 0
            this.deltaX = 0
            this.deltaY = 0
        }
    }

    isDragging() {
        return this.dragging
    }

    onMouseMove = (e) => {
        const x = e.clientX
        const y = e.clientY

        this.deltaX += x - this.clientX
        this.deltaY += y - this.clientY

        if (this.animationFrameID == null) {
            this.animationFrameID = requestAnimationFrame(
                this.triggerOnMouseMoveCallback,
            )
        }

        this.clientX = x
        this.clientY = y

        e.preventDefault()
    }

    onMouseUp = () => {
        if (this.animationFrameID) {
            cancelAnimationFrame(this.animationFrameID)
            this.triggerOnMouseMoveCallback()
        }

        this.triggerOnMouseMoveEndCallback(false)
    }

    triggerOnMouseMoveCallback = () => {
        this.animationFrameID = null
        this.onMouseMoveCallback(this.deltaX, this.deltaY, {
            clientX: this.clientX,
            clientY: this.clientY,
        })
        this.deltaX = 0
        this.deltaY = 0
    }

    triggerOnMouseMoveEndCallback = (cancel = false) => {
        this.onMouseMoveEndCallback(cancel)
    }
}
