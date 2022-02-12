import { NOOP } from '@vue/shared'
export const withInstall = (main, extra = {}) => {
    main.install = (app) => {
        for (const comp of [main, ...Object.values(extra)]) {
            app.component(comp.name, comp)
        }
    }
  
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            main[key] = comp
        }
    }
    return main
}

export const withNoopInstall = (component) => {
    component.install = NOOP
  
    return component
}