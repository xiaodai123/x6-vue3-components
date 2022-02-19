<template>
    <div style="height: 200px;">
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
                    <div style="width: 100%; height: 100%; background: #fff0f6;"/>
                </template>
            </X6SplitBox>
        </div>
    </div>
</template>