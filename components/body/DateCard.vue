<template>
    <div class=" shadow-sm rounded-[4px] bg-white p-3 mt-4">
        <template v-for="item in listItems">
            <div class="flex justify-between items-center bg-[#7070701a] my-3">
                <div class="flex justify-end">
                   <div class="info px-3">
                      <div class="price font-[500] font text-[12px] text-[#707070]">
                          {{ item.price }}
          
                      </div>
                   </div>
                </div>
              
                <div >
                  <span class="start text-[#707070] text-[24px] font-bold">
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
            price:'13:59:00',
            starts:'500'
        },
        {
            price:'13:59:00',
            starts:'500'
        },
        {
            price:'13:59:00',
            starts:'500'
        },
        {
            price:'13:59:00',
            starts:'500'
        },
    ]
    </script>
    
    <style  scoped>
    
    </style>