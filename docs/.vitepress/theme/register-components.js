import Demo from '../components/Demo.vue'
import Example from '../components/Example.vue'
import SourceCode from '../components/SourceCode.vue'
import 'x6-vue3-components/dist/x6-vue3-components.min.css'
import x6Vue3Components from 'x6-vue3-components'
export function registerComponents(app) {
    app.component('Demo', Demo)
    app.component('Example', Example)
    app.component('SourceCode', SourceCode)
    app.use(x6Vue3Components)
}
