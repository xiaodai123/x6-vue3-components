<template>
    <Tippy target="_parent">
        <slot></slot>
    </Tippy>
</template>
<script>
import { defineComponent } from 'vue'
import { createTippyComponent, defaultTippyProps } from "tippy.vue"
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/animations/perspective.css';
import 'tippy.js/animations/scale.css';
import tippy, {animateFill} from 'tippy.js'
const hideOnPopper = {
    name: 'hideOnPopper',
    defaultValue: true,
    fn(instance) {
        function x6DropdownHide(event) {
            let hide = true
            let element = event.target
            for(let i = 0; i < 5; i++) {
                if (!element) break
                element = element.parentElement
                if (!element) break
                if (element.classList && element.classList.contains('x6-menu-submenu')) {
                    hide = false
                    break;
                }
            }
            hide && instance.hide();
        }
        return {
            onShow() {
                let x6Dropdown = instance.popper.querySelector(".x6-dropdown")
                x6Dropdown && x6Dropdown.addEventListener('click', x6DropdownHide)
            },
            onHide() {
                let x6Dropdown = instance.popper.querySelector(".x6-dropdown")
                x6Dropdown && x6Dropdown.removeEventListener('click', x6DropdownHide)
            }
        }
    }
}

const contextMenu = {
    name: 'contextMenu',
    defaultValue: true,
    fn(instance) {
        return {
            onCreate() {
                let trigger = instance.props.trigger
                if (trigger == 'contextMenu') {
                    instance.reference.oncontextmenu = (e) => {
                        e.preventDefault()
                        instance.show()
                    }
                }
            },
            onDestroy() {
                let trigger = instance.props.trigger
                if (trigger == 'contextMenu') {
                    instance.reference.oncontextmenu = null
                }
            }
        }
    }
}
const tTheme = {
    props: {
        tTheme: {
            type: String
        }
    },
    build(props, options) {
        if (props.tTheme.value !== undefined)
        options.theme = props.tTheme.value
    }
}
const tAppendTo = {
    props: {
        tAppendTo: {
            type: [String, Function],
            default() {
                return () => document.body
            }
        }
    },
    build(props, options) {
        if (props.tAppendTo.value !== undefined)
        options.appendTo = props.tAppendTo.value
    }
}
const hideOnClick = {
    props: {
        hideOnClick: {
            type: [String, Boolean]
        }
    },
    build(props, options) {
        if (props.hideOnClick.value !== undefined)
        options.hideOnClick = props.hideOnClick.value
    }
}
const tAnimateFill = {
    props: {
        tAnimateFill: {
            type: Boolean,
            default: false
        }
    },
    build(props, options) {
        if (props.tAnimateFill.value !== undefined)
        options.animateFill = props.tAnimateFill.value
    }
}
tippy.setDefaultProps({
    plugins: [animateFill, hideOnPopper, contextMenu],
})
export default defineComponent({
    name: 'Tooltip',
    components: {
        Tippy: createTippyComponent(tTheme, ...defaultTippyProps, hideOnClick, tAppendTo, tAnimateFill)
    }
})
</script>
<style lang="scss">
@import '../theme-chalk/x6-tooltip.scss';
</style>