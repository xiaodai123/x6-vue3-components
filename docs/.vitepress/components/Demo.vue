<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <p text="sm" v-html="decodedDescription" />
        <div class="example">
            <div class="op-btns">
                <ElTooltip content="Copy code" :show-arrow="false">
                    <img src="./icons/copy-icon.svg" class="op-btn" @click="copyCode">
                </ElTooltip>
                <ElTooltip content="View source" :show-arrow="false">
                    <img src="./icons/source-code-icon.svg" class="op-btn" @click="setSourceVisible">
                </ElTooltip>
            </div>
            <ElDivider class="m-0" />
            <Example :file="path" :demo="formatPathDemos[path]" />
            <ElDivider v-if="sourceVisible" />
            <el-collapse-transition>
                <SourceCode v-show="sourceVisible" :source="source" />
            </el-collapse-transition>
        </div>
    </ClientOnly>
</template>
<script>
import { useToggle } from '../utils/toggle.js'
import { useClipboard } from '@vueuse/core'
import { computed, toRefs } from 'vue'
import Example from './Example.vue'
import SourceCode from './SourceCode.vue'
export default {
    name: 'Demo',
    components: {
        Example,
        SourceCode
    },
    props: {
        source: {
            type: String
        },
        path: {
            type: String
        },
        css: {
            type: String
        },
        cssPreProcessor: {
            type: String
        },
        js: {
            type: String
        },
        html: {
            type: String
        },
        demos: {
            type: Object,
            default() {
                return {}
            }
        },
        rawSource: {
            type: String
        },
        description: {
            type: String
        }
    },
    setup(props) {
        let { description, demos } = toRefs(props)
        let decodedDescription = computed(() =>
            decodeURIComponent(description.value)
        )
        let [sourceVisible, setSourceVisible] = useToggle()
        let formatPathDemos = computed(() => {
            let demosConst = {}

            Object.keys(demos.value).forEach((key) => {
                demosConst[key.replace('../../components/', '').replace('.vue', '')] =
                demos.value[key].default
            })

            return demosConst
        })
        return {
            decodedDescription,
            sourceVisible,
            setSourceVisible,
            formatPathDemos
        }
    },
    methods: {
        async copyCode() {
            const { copy, isSupported } = useClipboard({
                source: decodeURIComponent(this.rawSource),
                read: false,
            })
            if (!isSupported) {
                this.$message.error("This browser does not support automatic copy！")
            }
            try {
                await copy()
                this.$message.success("Copied!")
            } catch (e) {
                this.$message.error(e.message)
            }
        }
    }
}
</script>
<style lang="scss">
.example {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    overflow: hidden;

    .op-btns {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 3rem;
        line-height: 3rem;

        .el-icon {
            &:hover {
                color: #303133;
            }
        }

        .op-btn {
            margin: 0 0.5rem;
            cursor: pointer;
            color: #6c6c6c;
            transition: 0.2s;

            &.github a {
                transition: 0.2s;
                color: #6c6c6c;

                &:hover {
                    color: #303133;
                }
            }
        }
    }
}
</style>
