<template>
    <div style="display: flex;justify-content: space-around;">
        <div>
            <p style="font-weight: 800;">body</p>
            <div>
                <span>hover me</span>
                <X6Tooltip tTheme="light-border" :placement="item" trigger="mouseenter focus">
                    Hello
                </X6Tooltip>
            </div>
        </div>
        <div>
            <p style="font-weight: 800;">parent</p>
            <div>
                <span>hover me</span>
                <X6Tooltip tAppendTo="parent" tTheme="light-border" :placement="item" trigger="mouseenter focus">
                    Hello
                </X6Tooltip>
            </div>
        </div>
    </div>
</template>