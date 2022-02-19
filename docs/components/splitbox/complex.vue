<template>
    <div style="height: 400px;">
        <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: rgb(245, 245, 245); user-select: none;">
            <X6SplitBox
                split="horizontal"
                :minSize="80"
                :maxSize="-80"
                defaultSize='80%'
                primary="second"
                :resizerStyle="{background: '#e9e9e9'}"
            >
                <template #first>
                    <div style="width: 100%; height: 100%; background: #fff7e6;"/>
                </template>
                <template #second>
                    <X6SplitBox
                        split="vertical"
                        :minSize="40"
                        :maxSize="-160"
                        :defaultSize="240"
                        primary="first"
                        :resizerStyle="{background: '#e9e9e9'}"
                    >
                        <template #first>
                            <div style="width: 100%; height: 100%; background: #fff0f6;"/>
                        </template>
                        <template #second>
                            <div style="width: 100%; height: 100%;">
                                <X6SplitBox
                                    split="vertical"
                                    :minSize="40"
                                    :maxSize="-80"
                                    defaultSize='40%'
                                    primary="second"
                                    :resizerStyle="{background: '#e9e9e9'}"
                                >
                                    <template #first>
                                        <div style="width: 100%; height: 100%;">
                                            <X6SplitBox
                                                split="horizontal"
                                                :minSize="40"
                                                :maxSize="-40"
                                                :defaultSize="80"
                                                primary="first"
                                                :resizerStyle="{background: '#e9e9e9'}"
                                            >
                                                <template #first>
                                                    <div style="width: 100%; height: 100%; background: #e6f7ff;"/>
                                                </template>
                                                <template #second>
                                                    <div style="width: 100%; height: 100%; background: #e6fffb;"/>
                                                </template>
                                            </X6SplitBox>
                                        </div>
                                    </template>
                                    <template #second>
                                        <div style="width: 100%; height: 100%; background: #f6ffed;"/>
                                    </template>
                                </X6SplitBox>
                            </div>
                        </template>
                    </X6SplitBox>
                </template>
            </X6SplitBox>
        </div>
    </div>
</template>