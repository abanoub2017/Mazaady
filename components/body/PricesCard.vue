<template>
    <div class=" shadow-sm rounded-[4px] bg-white p-3 mt-4">
        <h3 class="text-[#1d1d1d] text-[20px] font-bold">المزادات الممفضلة</h3>
        <template v-for="item in listItems">
            <div class="grid grid-cols-2 gap-2 items-center py-3">
                              
                <div class=""> 
                        <div class="relative flex items-end overflow-hidden rounded-xl">
                            <!-- <IconCars /> -->
                            <img src="@/assets/img/car.png"
                                alt="Hotel Photo" />

                            <div class="absolute top-3 left-2 inline-flex items-center ">
                                <IconLive />
                            </div>
                            <div class="absolute top-3 right-2 inline-flex items-center ">
                                <IconLove />
                            </div>
                        </div>
                    </div>

                <div class="col-span-1">
                    <div class="font-bold font text-[12px] text-[#414141]">    {{ item.content }}</div>
                    <div class="info px-3 flex justify-between py-3 ">
                        <div class="name font-[500] font text-[12px] text-[#707070]">
                            اعلى سعر 

                        </div>
                        <div class="price font-bold font text-[17px] text-[#610060]">
                            {{ item.starts }}

                        </div>
                    </div>
                </div>


              
            </div>
        </template>
    </div>
</template>

<script setup>
const listItems = [
    {
        name: 'اسم المزايد',
        price: '13:59:00',
        starts: '50 $',
        content:'سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة'
    },
    {
        name: 'اسم المزايد',
        price: '13:59:00',
        starts: '50 $',
        content:'سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة'

    },
    {
        name: 'اسم المزايد',
        price: '13:59:00',
        starts: '50 $',
        content:'سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة'

    },
    {
        name: 'اسم المزايد',
        price: '13:59:00',
        starts: '50 $',
        content:'سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة'

    },
]
</script>

<style  scoped>

</style>