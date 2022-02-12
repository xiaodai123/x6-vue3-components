<template>
    <div class="os-host">
        <div class="os-resize-observer-host"></div>
        <div class="os-padding">
            <div class="os-viewport">
                <div class="os-content">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div class="os-scrollbar os-scrollbar-horizontal ">
            <div class="os-scrollbar-track">
                <div class="os-scrollbar-handle"></div>
            </div>
        </div>
        <div class="os-scrollbar os-scrollbar-vertical">
            <div class="os-scrollbar-track">
                <div class="os-scrollbar-handle"></div>
            </div>
        </div>
        <div class="os-scrollbar-corner"></div>
    </div>
</template>
<script>
import { ref, toRefs, watchEffect } from 'vue'
import OverlayScrollbars from 'overlayscrollbars'
import 'overlayscrollbars/css/OverlayScrollbars.css'
export default {
    name: 'overlay-scrollbars',
    props: {
        options: {
            type: Object,
            default() {
                return {}
            }
        },
        extensions: {
            type: [String, Array, Object],
            default() {
                return {}
            }
        }
    },
    setup(props) {
        let { options } = toRefs(props)
        let osInstance = ref(null)
        watchEffect(options.value, (currOptions, oldOptions) => {
            let osInstanceCur = osInstance.value
            if (osInstanceCur && OverlayScrollbars.valid(osInstanceCur)) {
                osInstanceCur.options(currOptions)
            }
        })
        return {
            osInstance
        }
    },
    mounted() {
        this.osInstance = OverlayScrollbars(
            this.osTarget(),
            this.options || {},
            this.extensions
        )
    },
    beforeUnmount() {
        const osInstance = this.osInstance
        if (OverlayScrollbars.valid(osInstance)) {
            osInstance.destroy()
            this.osInstance = null
        }
    },
    methods: {
        osTarget() {
            return this.$el
        }
    }
}
</script>