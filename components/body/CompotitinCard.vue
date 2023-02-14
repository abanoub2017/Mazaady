<template>
    <div class=" shadow-sm rounded-[4px] bg-white p-3 mt-4">
        <h3 class="text-[#1d1d1d] text-[20px] font-bold">المتنافسون</h3>
        <template v-for="item in listItems">
            <div class="flex justify-between items-center py-3">
                <div class="flex justify-end">
                  <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                   <div class="info px-3">
                      <div class="name font-bold font text-[14px] text-[#414141]">
                         {{ item.name }}
          
                      </div>
                      <div class="price font-[500] font text-[12px] text-[#808080]">
                          {{ item.price }}
          
                      </div>
                   </div>
                </div>
              
                <div >
                  <span class="start bg-[#fdbc011a] text-[#fdbc01] text-[22px] font-bold">
                      {{ item.starts }}
                  </span>
                </div>
            </div>
        </template>
    </div>
    </template>
    
    <script setup>
    const listItems = [
        {
            name:'اسم المزايد',
            price:'13:59:00',
            starts:'20+'
        },
        {
            name:'اسم المزايد',
            price:'13:59:00',
            starts:'20+'
        },
        {
            name:'اسم المزايد',
            price:'13:59:00',
            starts:'20+'
        },
        {
            name:'اسم المزايد',
            price:'13:59:00',
            starts:'20+'
        },
    ]
    </script>
    
    <style  scoped>
    
    </style>