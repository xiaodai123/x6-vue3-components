<template>
    <aside ref="container" class="toc-wrapper">
        <nav class="toc-content">
            <h3 class="toc-content__heading">Contents</h3>
            <ul class="toc-items">
                <li
                    v-for="{ link, text, children } in headers"
                    :key="link"
                    class="toc-item"
                >
                <a class="toc-link" :href="link">{{ text }}</a>
                    <ul v-if="children">
                        <li
                        v-for="{ link: childLink, text: childText } in children"
                        :key="childLink"
                        class="toc-item"
                        >
                            <a class="toc-link subitem" :href="childLink">{{ childText }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div ref="marker" class="toc-marker"></div>
        </nav>
    </aside>
</template>
<script>
import { ref } from 'vue'
import { useToc } from '../utils/useToc.js'
import { useActiveSidebarLinks } from '../utils/activeBar.js'
export default {
    name: 'TocContentNav',
    setup() {
        let headers = useToc()
        let marker = ref()
        let container = ref()
        useActiveSidebarLinks(container, marker)
        return {
            headers,
            marker,
            container
        }
    }
}
</script>
<style lang="scss">
.toc-wrapper {
    position: fixed;
    top: 87px;
    right: 0;
    margin-top: 32px;
    padding: 4px 8px 4px 12px;
    margin-bottom: 32px;
    width: 144px;
    .toc-content {
        .toc-marker {
            opacity: 0;
            position: absolute;
            background-color: #873bf4;
            border-radius: 4px;
            width: 4px;
            height: 14px;
            top: 30px;
            left: 0;
            z-index: 0;
            transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s,
                background-color 0.5s;
        }

        &__heading {
            font-size: 12px;
            color: #606266;
            font-weight: 600;
            text-transform: uppercase;
            margin-top: 0;
        }

        .toc-items {
            list-style: none;
            padding: 0;
            margin: 12px 0 0;
            line-height: 1.2;

            .toc-item {
                margin-top: 10px;
                font-size: 11px;
                color: #909399;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: inherit;

                .toc-link {
                    position: relative;
                    color: #909399;
                    transition: color .3s;
                    &.active {
                        color: #873bf4;
                    }
                }

                &.subitem {
                    padding-left: 1rem;
                }
            }
        }
    }
}
</style>