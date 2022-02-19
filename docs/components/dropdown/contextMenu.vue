<template>
    <X6Dropdown placement="bottom-start" trigger="contextmenu">
        <div>Right Click on Me</div>
        <template #visible>
            <X6Menu>
                <X6MenuItem key="1">1st menu item</X6MenuItem>
                <X6MenuItem key="2">2nd menu item</X6MenuItem>
                <X6MenuItem key="3">3rd menu item</X6MenuItem>
            </X6Menu>
        </template>
    </X6Dropdown>
</template>