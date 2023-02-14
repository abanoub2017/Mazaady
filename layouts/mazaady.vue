<template>
    <div class="mazaady">
        <!-- Output the Page Content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.mazaady{
    direction: rtl;
}
.router-link-exact-active {
    color: #12b488;
}
</style>