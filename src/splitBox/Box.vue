<template>
    <div :style="styleData">
        <slot></slot>
    </div>
</template>
<script>
import { toRefs, reactive } from 'vue'
export default {
    name: 'Box',
    props: {
        styleProperties: {
            type: Object,
            default() {
                return {}
            }
        },
        currentSize: {
            type: [String, Number]
        },
        oppositeSize: {
            type: [String, Number]
        },
        indexProperties: {
            type: Number,
            default: 1 // 1 | 2
        },
        vertical: {
            type: Boolean,
            default: false
        },
        isPrimary: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        let { styleProperties, indexProperties, currentSize, oppositeSize, vertical } = toRefs(props)
        let styleData = reactive({
            ...styleProperties.value,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: 1
        })
        if (vertical.value) {
            styleData.bottom = 0
            styleData.top = 0
        } else {
            styleData.left = 0
            styleData.right = 0
        }
        if (currentSize.value != null) {
            if (vertical.value) {
                styleData.width = currentSize.value
                if (indexProperties.value === 1) {
                    styleData.left = 0
                } else {
                    styleData.right = 0
                }
            } else {
                styleData.height = currentSize.value
                if (indexProperties.value === 1) {
                    styleData.top = 0
                } else {
                    styleData.bottom = 0
                }
            }
        } else if (vertical.value) {
            if (indexProperties.value === 1) {
                styleData.left = 0
                styleData.right = oppositeSize.value
            } else {
                styleData.left = oppositeSize.value
                styleData.right = 0
            }
        } else if (indexProperties.value === 1) {
            styleData.top = 0
            styleData.bottom = oppositeSize.value
        } else {
            styleData.top = oppositeSize.value
            styleData.bottom = 0
        }
        return {
            styleData
        }
    }
}
</script>