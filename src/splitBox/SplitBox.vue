<template>
    <div :style="splitBoxStyleData" :class="splitBoxClassName" ref="container">
        <Box
            key="box1"
            ref="box1Elem"
            :styleProperties="box1StyleData"
            :indexProperties="1"
            :class="box1ClassName"
            :currentSize="box1Size"
            :oppositeSize="box2Size"
            :vertical="isVertical"
            :isPrimary="isBox1Primary"
        >
            <slot name="first"></slot>
        </Box>
        <Resizer
            key="resizer"
            :styleProperties="resizerStyleData"
            :class="`${baseCls}-resizer`"
            ref="resizerElem"
            :click="onResizerClick"
            :mouseDown="onMouseDown"
            :mouseMove="onMouseMove"
            :mouseMoveEnd="onMouseMoveEnd"
            :doubleClick="onResizerDoubleClick"
        />
        <Box
            key="box2"
            ref="box2Elem"
            :styleProperties="box2StyleData"
            :indexProperties="2"
            :class="box2ClassName"
            :currentSize="box2Size"
            :oppositeSize="box1Size"
            :vertical="isVertical"
            :isPrimary="isBox2Primary"
        >
            <slot name="second"></slot>
        </Box>
    </div>
</template>
<script>
import { ref, toRefs, computed, provide, reactive } from 'vue'
import clamp from 'clamp'
import Box from './Box.vue'
import Resizer from './Resizer.vue'
export default {
    name: 'SplitBox',
    components: {
        Box,
        Resizer
    },
    props: {
        split: {
            type: String,
            default: 'vertical',
            validator(value) {
                return ['vertical', 'horizontal'].includes(value)
            }
        },
        primary: {
            type: String,
            default: 'first',
            validator(value) {
                return ['first', 'second'].includes(value)
            }
        },
        resizable: {
            type: Boolean,
            default: true
        },
        refresh: {
            type: Boolean,
            default: false
        },
        size: {
            type: [Number, String]
        },
        minSize: {
            type: Number
        },
        maxSize: {
            type: Number
        },
        defaultSize: {
            type: [Number, String],
            default: '25%'
        },
        step: {
            type: Number
        },
        styleProperties: {
            type: Object,
            default() {
                return {}
            }
        },
        boxStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        primaryBoxStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        secondBoxStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        resizerStyle: {
            type: Object,
            default() {
                return {}
            }
        },
        onResizeStart: {
            type: Function,
            default() {
                return () => {}
            }
        },
        onResizeEnd: {
            type: Function,
            default() {
                return (newSize = 0) => {}
            }
        },
        onResizing: {
            type: Function,
            default() {
                return (newSize = 0) => {}
            }
        },
        onResizerClick: {
            type: Function,
            default() {
                return () => {}
            }
        },
        onResizerDoubleClick: {
            type: Function,
            default() {
                return () => {}
            }
        }
    },
    setup(props) {
        let { styleProperties, boxStyle, primaryBoxStyle, secondBoxStyle, resizerStyle, size, defaultSize, primary, split, resizable } = toRefs(props)
        let prefixCls = ref('x6')
        let baseCls = ref(`${prefixCls.value}-split-box`)
        let getNextState = computed(() => {
            let initialSize =
            size.value != null ? size.value : defaultSize.value != null ? defaultSize.value : '25%'
            if (typeof initialSize === 'number' && !isNaN(initialSize)) {
                initialSize = initialSize + 'px'
            }
            return {
                box1Size: primary.value === 'first' ? initialSize : undefined,
                box2Size: primary.value === 'second' ? initialSize : undefined,
            }
        })

        let isVertical = computed(() => {
            return split.value === 'vertical'
        })

        let isPrimaryFirst = computed(() => {
            return primary.value === 'first'
        })

        let minSizeUp = ref('')
        let maxSizeUp = ref('')
        let curSize = ref('')
        let rawSize = ref('')
        let resizing = ref(false)
        let box1Size = ref(getNextState.value.box1Size)
        let box2Size = ref(getNextState.value.box2Size)

        let container = ref(null)
        let box1Elem = ref(null)
        let box2Elem = ref(null)
        let maskElem = ref(null)
        let resizerElem = ref(null)

        let splitBoxStyleData = reactive({
            ...styleProperties.value,
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '100%'
        })

        let splitBoxClassName = computed(() => {
            return `${baseCls.value} 
            ${baseCls.value}-${split.value} 
            ${!resizable.value ? baseCls.value + '-disabled' : ''}
             `
        })

        const isBox1Primary = ref(primary.value === 'first')
        let box1StyleData = reactive({
            ...boxStyle.value,
            ...(isBox1Primary.value ? primaryBoxStyle.value : secondBoxStyle.value)
        })
        let box1ClassName = computed(() => {
            return `${baseCls.value}-item 
            ${isBox1Primary.value ? baseCls.value + '-item-primary' : baseCls.value + '-item-second'}
             `
        })
        const isBox2Primary = ref(primary.value === 'second')
        let box2StyleData = reactive({
            ...boxStyle.value,
            ...(isBox2Primary.value ? primaryBoxStyle.value : secondBoxStyle.value)
        })
        let box2ClassName = computed(() => {
            return `${baseCls.value}-item 
            ${isBox2Primary.value ? baseCls.value + '-item-primary' : baseCls.value + '-item-second'}
             `
        })
        let resizerStyleData = {
            ...resizerStyle.value,
            position: 'absolute',
            zIndex: 2
        }
        if (isVertical.value) {
            resizerStyleData.top = 0
            resizerStyleData.bottom = 0

            if (resizable.value === true) {
                resizerStyleData.cursor = 'col-resize'
            }

            if (isPrimaryFirst.value) {
                resizerStyleData.left = box1Size.value
            } else {
                resizerStyleData.right = box2Size.value
            }
        } else {
            resizerStyleData.left = 0
            resizerStyleData.right = 0

            if (resizable.value === true) {
                resizerStyleData.cursor = 'row-resize'
            }

            if (isPrimaryFirst.value) {
                resizerStyleData.top = box1Size.value
            } else {
                resizerStyleData.bottom = box2Size.value
            }
        }
        resizerStyleData = reactive(resizerStyleData)

        return {
            prefixCls,
            baseCls,
            getNextState,
            isVertical,
            isPrimaryFirst,
            minSizeUp,
            maxSizeUp,
            curSize,
            rawSize,
            resizing,
            box1Size,
            box2Size,
            container,
            box1Elem,
            box2Elem,
            maskElem,
            resizerElem,
            splitBoxStyleData,
            splitBoxClassName,
            isBox1Primary,
            box1StyleData,
            box1ClassName,
            isBox2Primary,
            box2StyleData,
            box2ClassName,
            resizerStyleData
        }
    },
    methods: {
        getDelta(deltaX = 0, deltaY = 0) {
            let step = this.step
            let isVertical = this.isVertical
            let isPrimaryFirst = this.isPrimaryFirst

            let delta = isVertical ? deltaX : deltaY
            if (delta === 0) {
                return 0
            }

            if (step && Math.abs(delta) >= step) {
                // ~~常用来取整
                delta = ~~(delta / step) * step
            }

            delta = isPrimaryFirst ? -delta : delta

            let primaryBox = isPrimaryFirst ? this.box1Elem.$el : this.box2Elem.$el
            let secondBox = isPrimaryFirst ? this.box2Elem.$el : this.box1Elem.$el
            let box1Order = parseInt(window.getComputedStyle(primaryBox).order, 10)
            let box2Order = parseInt(window.getComputedStyle(secondBox).order, 10)
            if (box1Order > box2Order) {
                delta = -delta
            }

            return delta
        },
        getRange() {
            let maxSize = this.maxSize
            let minSize = this.minSize

            let containerRect = this.container.getBoundingClientRect()
            let containerSize = this.isVertical
            ? containerRect.width
            : containerRect.height

            let newMinSize = minSize !== undefined ? minSize : 0
            let newMaxSize = maxSize !== undefined ? maxSize : 0

            while (newMinSize < 0) {
                newMinSize = containerSize + newMinSize
            }

            while (newMaxSize <= 0) {
                newMaxSize = containerSize + newMaxSize
            }

            return {
                minSize: clamp(newMinSize, 0, containerSize),
                maxSize: clamp(newMaxSize, 0, containerSize)
            }
        },
        getPrimarySize() {
            let primaryBox = this.isPrimaryFirst ? this.box1Elem.$el : this.box2Elem.$el
            return this.isVertical
            ? primaryBox.getBoundingClientRect().width
            : primaryBox.getBoundingClientRect().height
        },
        setPrimarySize(size) {
            let isFirstPrimary = this.isPrimaryFirst
            let primaryBox = isFirstPrimary ? this.box1Elem.$el : this.box2Elem.$el
            let secondBox = isFirstPrimary ? this.box2Elem.$el : this.box1Elem.$el
            let resizerElem = this.resizerElem.$el

            const value = `${size}px`
            if (this.isVertical) {
                primaryBox.style.width = value
                if (isFirstPrimary) {
                    secondBox.style.left = value
                    resizerElem.style.left = value
                } else {
                    secondBox.style.right = value
                    resizerElem.style.right = value
                }
            } else {
                primaryBox.style.height = value
                if (isFirstPrimary) {
                    secondBox.style.top = value
                    resizerElem.style.top = value
                } else {
                    secondBox.style.bottom = value
                    resizerElem.style.bottom = value
                }
            }
        },
        updateCursor(size, minSize, maxSize) {
            let cursor = ''
            if (this.isVertical) {
                if (size === minSize) {
                    cursor = this.isPrimaryFirst ? 'e-resize' : 'w-resize'
                } else if (size === maxSize) {
                    cursor = this.isPrimaryFirst ? 'w-resize' : 'e-resize'
                } else {
                    cursor = 'col-resize'
                }
            } else if (size === minSize) {
                cursor = this.isPrimaryFirst ? 's-resize' : 'n-resize'
            } else if (size === maxSize) {
                cursor = this.isPrimaryFirst ? 'n-resize' : 's-resize'
            } else {
                cursor = 'row-resize'
            }

            this.maskElem.style.cursor = cursor
        },
        createMask() {
            const mask = document.createElement('div')
            mask.style.position = 'absolute'
            mask.style.top = '0'
            mask.style.right = '0'
            mask.style.bottom = '0'
            mask.style.left = '0'
            mask.style.zIndex = '9999'
            document.body.appendChild(mask)
            this.maskElem = mask
        },
        removeMask() {
            if (this.maskElem.parentNode) {
                this.maskElem.parentNode.removeChild(this.maskElem)
            }
        },
        onMouseDown() {
            const { maxSize, minSize } = this.getRange()
            this.minSizeUp = minSize
            this.maxSizeUp = maxSize
            this.curSize = this.getPrimarySize()
            this.rawSize = this.curSize
            this.resizing = true

            this.createMask()
            this.updateCursor(this.curSize, minSize, maxSize)
        },
        onMouseMove(deltaX, deltaY) {
            if (this.resizable && this.resizing) {
                const delta = this.getDelta(deltaX, deltaY)
                if (delta === 0) {
                    return
                }

                if (this.rawSize < this.minSizeUp || this.rawSize > this.maxSizeUp) {
                    this.rawSize -= delta
                    return
                }

                this.rawSize -= delta
                this.curSize = this.rawSize
                this.curSize = clamp(this.curSize, this.minSizeUp, this.maxSizeUp)

                this.setPrimarySize(this.curSize)
                this.updateCursor(this.curSize, this.minSizeUp, this.maxSizeUp)
                if (this.onResizing) {
                    this.onResizing(this.curSize)
                }
            }
        },
        onMouseMoveEnd() {
            if (this.resizable && this.resizing) {
                if (this.onResizeEnd) {
                    this.onResizeEnd(this.curSize)
                }

                if (this.refresh) {
                    const isPrimaryFirst = this.isPrimaryFirst
                    this.box1Size = isPrimaryFirst ? this.curSize : undefined
                    this.box2Size = isPrimaryFirst ? undefined : this.curSize
                }

                this.resizing = false
                this.removeMask()
            }
        }

    }
}
</script>
<style lang="scss">
@import './splitBox';
</style>