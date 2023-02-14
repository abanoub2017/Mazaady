<template>
    <div>
        <!-- Form -->
        <form class="w-full max-w-lg m-auto" @submit.prevent="addCategory()">
            <div class="flex flex-wrap -mx-3 mb-2">
                <!-- Categories -->
                <div class="w-full px-3 py-3">
                    <label class="select-label" for="grid-state">
                        Main Categories
                    </label>
                    <div class="relative">
                        <select class="select-btn" id="grid-state" v-model="list.mainCategories" required>
                            <option v-for="cat in categories" :value="cat">{{ cat.name }}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <!--  Sub Categories -->
                <div class="w-full px-3 py-3">
                    <label class="select-label" for="grid-state">
                        Sub Categories
                    </label>
                    <div class="relative">
                        <select class="select-btn" @click="handelProcessType()" id="grid-state" required
                            v-model="list.subCategories">
                            <option v-for="cat in subCategories" :value="cat">{{ cat.name }}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- Process Type -->
                <div class="w-full px-3 py-3">
                    <label class="select-label" for="grid-state">
                        Process Type
                    </label>
                    <div class="relative">
                        <select class="select-btn" id="grid-state" v-model="list.processType"
                            @click="handelOptionsChild()">
                            <template v-if="processTypeCat">
                                <option v-for="cat in processTypeCat" :value="cat">{{ cat.name }}</option>
                                <option value="other">Other</option>
                            </template>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- Process Type Other-->
                <div class="w-full px-3 py-3" v-if="list.processType == 'other'">
                    <div class="relative">
                        <input v-model="list.processTypeOther" class="input-text" id="grid-last-name" type="text"
                            placeholder="">
                    </div>
                </div>
                <!-- Model -->
                <div class="w-full px-3 py-3">
                    <label class="select-label" for="grid-state">
                        Model
                    </label>
                    <div class="relative">
                        <select class="select-btn" id="grid-state" v-model="list.model">
                            <template v-if="modelCat">
                                <template v-for="option in modelCat">
                                    <option v-for="cat in option.options" :value="cat">{{ cat.name }}</option>
                                </template>
                            </template>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn-cat" type="submit">
                Add Category
            </button>
        </form>

        <!-- Table -->
        <div v-if="showTable"
            class="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-lg m-auto my-3 bg-white">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Category name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Sub Category
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Process Type
                        </th>
                        <th scope="col" class="px-6 py-3" v-if="list.processTypeOther">
                            Process Type Other
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            model
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <td class="px-6 py-4">
                            {{ list.mainCategories.name }}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {{ list.subCategories.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ list.processType.name }}
                        </td>
                        <td v-if="list.processTypeOther" class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {{ list.processTypeOther }}
                        </td>
                        <td class="px-6 py-4">
                            {{ list.model.name }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script setup>
import { ref, watchEffect, computed } from "vue";
const { data: api } = await useFetch('/api/cat')
const categories = ref(api)
const subCategories = ref('')
const processTypeCat = ref('')
const modelCat = ref('')
const showTable = ref(false)
const list = ref({
    mainCategories: '',
    subCategories: '',
    processType: '',
    processTypeOther: '',
    model: ''
})
const handelProcessType = async () => {
    if (list.value.subCategories != '') {
        const { data: processType } = await useFetch(`/api/${list.value.subCategories.id}`)
        processTypeCat.value = processType._value

    }
}
const handelOptionsChild = async () => {
    if (list.value.processType != '') {
        const { data: options } = await useFetch(`/api/child/${list.value.subCategories.id}`)
        modelCat.value = options._value
    }
}
const addCategory = () => {
    showTable.value = true
}
const checked = ((id) => { subCategories.value = categories.value.filter(item => item.id == id)[0].children })
watchEffect(() => {
    if (list.value.mainCategories) {
        checked(list.value.mainCategories.id)
        processTypeCat.value = ''
    }
})
</script>

<style  scoped>

</style>