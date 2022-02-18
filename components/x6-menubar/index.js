import { withInstall, withNoopInstall } from '../util/install'
import Menubar from './Menubar.vue'
import MenubarItem from './MenubarItem.vue'

export const X6Menubar = withInstall(Menubar, {
    MenubarItem
})

export default X6Menubar

export const X6MenubarItem = withNoopInstall(MenubarItem)