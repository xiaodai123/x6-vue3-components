<template>
    <div style="height: 400px;">
        <el-input v-model="colorPickerValue" readonly></el-input>
        <X6ColorPicker :predefineColors="predefineColors" @change="changeColorPickerValue" :color="colorPickerValue"></X6ColorPicker>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colorPickerValue: '#873bf4',
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'rgba(51, 100, 98)',
                'rgba(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ]
        }
    },
    methods: {
        changeColorPickerValue(color) {
            this.colorPickerValue = color
        }
    }
}
</script>