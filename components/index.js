import X6ColorPicker from './x6-color-picker';
import X6ContextMenu from './x6-context-menu';
import X6Dropdown from './x6-dropdown';
import X6Menu, { X6SubMenu, X6MenuItem, X6Divider } from './x6-menu';
import X6Menubar, { X6MenubarItem } from './x6-menubar';
import X6Scrollbox from './x6-scrollbox';
import X6SplitBox from './x6-split-box';
import X6Toolbar, { X6Group, X6Item } from './x6-toolbar';
import X6Tooltip from './x6-tooltip';
// import path from 'path';

const components = [
    X6ColorPicker,
    X6ContextMenu,
    X6Dropdown,
    X6Menu,
    X6SubMenu,
    X6MenuItem,
    X6Divider,
    X6Menubar,
    X6MenubarItem,
    X6Scrollbox,
    X6SplitBox,
    X6Toolbar,
    X6Group,
    X6Item,
    X6Tooltip
]

// const version = path.resolve('../package.json').version
const install = (app) => {
    components.forEach(component => {
        app.component(`X6${component.name}`, component);
    });
};
const _default = {
    // version,
    install,
};

export {
    install,
    // version,
    X6ColorPicker,
    X6ContextMenu,
    X6Dropdown,
    X6Menu,
    X6SubMenu,
    X6MenuItem,
    X6Divider,
    X6Menubar,
    X6MenubarItem,
    X6Scrollbox,
    X6SplitBox,
    X6Toolbar,
    X6Group,
    X6Item,
    X6Tooltip
}

export default _default
