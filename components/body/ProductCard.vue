<template>
    <div class=" rounded bg-white my-4 m-3">
        <div class="slider">
            <div class="slides">
                <div v-for="(slide, index) in slides" :key="index" :class="{ current: currentIndex === index }">
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                        <img :src="slide.image" alt="img" class="w-full h-full object-cover">
                        <div class="absolute top-3 left-2 inline-flex items-center ">
                            <img src="@/assets/img/share.svg" alt="share" >
                        </div>
                        <div class="absolute top-3 left-14 mx-2 inline-flex items-center ">
                            <img src="@/assets/img/Heighlight.svg" alt="Heighlight" >
                        </div>
                        <div class="absolute top-3 left-28 mx-2 inline-flex items-center ">
                            <img src="@/assets/img/like.svg" alt="Heighlight" >
                        </div>
                        <div class="absolute top-3 right-5 mx-2 inline-flex items-center ">
                            <div class="bg-[#1d1d1d] text-white text-[10px] rounded-md py-1 px-2">
                                <span class="border-r-2 mr-2 pr-2">3000</span>
                                <span class="">02:00</span>
                            </div>
                        </div>
                    </div>
                    <div class="details p-3">
                        <div class="title font-bold text-[#414141] pt-2">
                            {{ slide.description }}
                        </div>
                        <div class="sub-title font-[500] text-[12px] text-[#808080] pt-2">
                            {{ slide.subTitle }}
                        </div>
                        <div class="list-price flex justify-between my-3 ">
                            <div class="prices flex justify-between">
                                <p class="price-item text[16px] ">+10000</p>
                                <p class="price-item text[16px] ">+10010</p>
                                <p class="price-item text[16px] ">+10020</p>
                            </div>
                            <div class="flex justify-between">
                                <input type="text" class="send" placeholder="اكتب المبلغ">
                                <button class="btn-send text-white text-[13px] px-5">تأكيد</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dots">
                <button v-for="(slide, index) in slides" :key="index" :class="{ active: currentIndex === index }"
                    @click="currentIndex = index">
                    <img :src="slide.image" alt="img" class="w-full h-full object-cover">
                </button>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                { title: 'Slide 1', description: 'شراء مجموعة من السيارات من موديلات1990', subTitle:'code 1234', image: 'https://picsum.photos/880/350?random=1' },
                { title: 'Slide 2', description: 'شراء مجموعة من السيارات من موديلات1990',subTitle:'code 1234', image: 'https://picsum.photos/880/350?random=2' },
                { title: 'Slide 3', description: 'شراء مجموعة من السيارات من موديلات1990', subTitle:'code 1234', image: 'https://picsum.photos/880/350?random=3' }
            ]
        }
    }
}
</script>

<style scoped>
.send{
    border: 1px solid #ddd;
    border-radius: 4px;
}
.slider {
    position: relative;
}

.slides {
    display: flex;
    position: relative;
}

.slides>div {
    flex: 0 0 100%;
    display: none;
    position: relative;
}

.slides>div.current {
    display: block;
}

.dots {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -14%;
    top: 0;
    /* justify-content: center; */
}

.dots button {
    border: none;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    margin: 8px 8px;
}
.dots button img{
    border-radius: 5px;
}

.dots button.active {
    background-color: #555;
}
</style>
