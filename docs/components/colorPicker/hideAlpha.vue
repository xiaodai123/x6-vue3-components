<template>
    <div style="height: 300px;">
        <el-input v-model="colorPickerValue" readonly></el-input>
        <X6ColorPicker :showAlpha="false" @change="changeColorPickerValue" :color="colorPickerValue"></X6ColorPicker>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colorPickerValue: '#873bf4'
        }
    },
    methods: {
        changeColorPickerValue(color) {
            this.colorPickerValue = color
        }
    }
}
</script>