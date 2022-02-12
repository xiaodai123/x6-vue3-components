import { withInstall, withNoopInstall } from '../util/install'
import Menu from './Menu.vue'
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'
import Divider from './Divider.vue'

export const X6Menu = withInstall(Menu, {
    SubMenu,
    MenuItem,
    Divider
})

export default X6Menu

export const X6SubMenu = withNoopInstall(SubMenu)
export const X6MenuItem = withNoopInstall(MenuItem)
export const X6Divider = withNoopInstall(Divider)