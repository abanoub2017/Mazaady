<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt 3 Mazaady</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/"> Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/mazaady"> Mazaady</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- Output the Page Content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>