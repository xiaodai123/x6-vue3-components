<template>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
        <X6Dropdown v-for="(item, index) in placements" :key="index" :placement="item" trigger="mouseenter focus">
            <div class="droddown-div">{{item}}</div>
            <template #visible>
                {{item}}
            </template>
        </X6Dropdown>
    </div>
</template>
<script>
export default {
    data() {
        return {
            placements: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end']
        }
    }
}
</script>
<style lang="scss">
.droddown-div {
    border: none;
    flex: 1;
    margin: 4px;
    color: #fff;
    background: #424557;
    will-change: opacity;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 16px;
    border-radius: 4px;
    transition: background 0.2s,color 0.2s;
    box-shadow: 0 1px 4px -2px black, inset 0 2px 1px -1px rgb(255 255 255 / 10%);
}
</style>