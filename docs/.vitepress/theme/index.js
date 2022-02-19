import theme from 'vitepress/dist/client/theme-default'
import { registerComponents } from './register-components'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from "@element-plus/icons"
import './styles/index.css'
import './styles/code.scss'


export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(ElementPlus)

    for (const name in ElIcons){
      app.component(name, ElIcons[name])
    }
    
    registerComponents(app)
  }
}
