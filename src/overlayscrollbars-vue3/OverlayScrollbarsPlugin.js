import OverlayScrollbars from 'overlayscrollbars';
import OverlayScrollbarsComponent from './OverlayScrollbarsComponent.vue';

export const OverlayScrollbarsPlugin = {
    install(app, options) {
        if (options) {
            OverlayScrollbars.defaultOptions(options);
        }

        app.component('overlay-scrollbars', OverlayScrollbarsComponent);
    }
}