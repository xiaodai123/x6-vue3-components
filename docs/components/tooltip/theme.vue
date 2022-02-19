<template>
    <div style="display: flex;justify-content: space-around;">
        <div>
            <p style="font-weight: 800;">dark</p>
            <div>
                <span>hover me</span>
                <X6Tooltip tTheme="dark" :placement="item" trigger="mouseenter focus">
                    Hello
                </X6Tooltip>
            </div>
        </div>
        <div>
            <p style="font-weight: 800;">light</p>
            <div>
                <span>hover me</span>
                <X6Tooltip tTheme="light" :placement="item" trigger="mouseenter focus">
                    Hello
                </X6Tooltip>
            </div>
        </div>
        <div>
            <p style="font-weight: 800;">light-border</p>
            <div>
                <span>hover me</span>
                <X6Tooltip tTheme="light-border" :placement="item" trigger="mouseenter focus">
                    Hello
                </X6Tooltip>
            </div>
        </div>
    </div>
</template>