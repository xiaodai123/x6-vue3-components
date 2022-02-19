<template>
    <div style="display: flex;justify-content: space-around;">
        <div>
            <p style="font-weight: 800;">dark</p>
            <X6Dropdown tTheme="dark" trigger="mouseenter focus">
                <span>hover me</span>
                <template #visible>
                    test
                </template>
            </X6Dropdown>
        </div>
        <div>
            <p style="font-weight: 800;">light</p>
            <X6Dropdown tTheme="light" trigger="mouseenter focus" tAppendTo="parent">
                <span>Hover me</span>
                <template #visible>
                    <X6Menu>
                        <X6MenuItem key="1">1st menu item</X6MenuItem>
                        <X6MenuItem key="2">2nd menu item</X6MenuItem>
                        <X6MenuItem key="3">3rd menu item</X6MenuItem>
                    </X6Menu>
                </template>
            </X6Dropdown>
        </div>
        <div>
            <p style="font-weight: 800;">light-border</p>
            <X6Dropdown tTheme="light-border" trigger="mouseenter focus" tAppendTo="parent">
                <span>Hover me</span>
                <template #visible>
                    <X6Menu>
                        <X6MenuItem key="1">1st menu item</X6MenuItem>
                        <X6MenuItem key="2">2nd menu item</X6MenuItem>
                        <X6MenuItem key="3">3rd menu item</X6MenuItem>
                    </X6Menu>
                </template>
            </X6Dropdown>
        </div>
    </div>
</template>