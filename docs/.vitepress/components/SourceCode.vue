<template>
    <div class="example-source language-vue" v-html="decoded"></div>
</template>
<script>
import { computed, toRefs } from 'vue'
export default {
    name: 'SourceCode',
    props: {
        source: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        let { source } = toRefs(props)
        let decoded = computed(() => {
            return decodeURIComponent(source.value)
        })
        return {
            decoded
        }
    }
}
</script>
<style lang="scss">
.language-vue {
    margin: 0;
    border-radius: 0;
}
</style>
