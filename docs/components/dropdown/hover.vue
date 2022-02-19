<template>
    <div style="width: max-content;">
        <X6Dropdown trigger="mouseenter focus">
            <span>hover me</span>
            <template #visible>
                <X6Menu>
                    <X6MenuItem key="1">1st menu item</X6MenuItem>
                    <X6MenuItem key="2">2nd menu item</X6MenuItem>
                    <X6MenuItem key="3">3rd menu item</X6MenuItem>
                </X6Menu>
            </template>
        </X6Dropdown>
    </div>
</template>