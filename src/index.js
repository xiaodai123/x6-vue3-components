import X6ColorPicker from './colorPicker';
import X6ContextMenu from './contextMenu';
import X6Dropdown from './dropdown';
import X6Menu, { X6SubMenu, X6MenuItem, X6Divider } from './menu';
import X6Menubar, { X6MenubarItem } from './menubar';
import X6Scrollbox from './scrollbox';
import X6SplitBox from './splitBox';
import X6Toolbar, { X6Group, X6Item } from './toolbar';
import X6Tooltip from './tooltip';
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
