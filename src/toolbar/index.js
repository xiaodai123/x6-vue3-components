import { withInstall, withNoopInstall } from '../util/install'
import Toolbar from './Toolbar.vue'
import Group from './Group.vue'
import Item from './Item.vue'

export const X6Toolbar = withInstall(Toolbar, {
    Group,
    Item
})

export default X6Toolbar

export const X6Group = withNoopInstall(Group)
export const X6Item = withNoopInstall(Item)