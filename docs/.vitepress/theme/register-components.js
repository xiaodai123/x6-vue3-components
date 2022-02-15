import Demo from '../components/Demo.vue'
import Example from '../components/Example.vue'
import SourceCode from '../components/SourceCode.vue'
export function registerComponents(app) {
    app.component('Demo', Demo)
    app.component('Example', Example)
    app.component('SourceCode', SourceCode)
}
