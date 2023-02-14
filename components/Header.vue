<template>
    <div class="flex justify-between py-3">
        <div class="flex justify-between pr-11">

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                class="primary-color bg-[#d206531a] w-56 focus:outline-none font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button">
                مزاد مباشر متعدد

                 <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                            out</a>
                    </li>
                </ul>
            </div>

            <input type="text" class="send focus:outline-none w-96 bg-[#d206531a] text-[#323232]" placeholder="ابحث هنا">
            <button class="bg-[#D20653] text-white text-[13px] px-5 rounded">تأكيد</button>
        </div>
        <div class="pl-5">
            <logo />
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

</style>