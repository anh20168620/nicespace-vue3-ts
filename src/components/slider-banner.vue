<template>
  <div class="mx-4 mt-3 mb-5 lg:mx-[120px] flex gap-6">
    <swiper
      class="rounded-tl-2xl rounded-br-2xl w-full h-auto lg:w-[75%] lg:h-auto"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
    >
      <swiper-slide>
        <img
          class="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover"
          src="../assets/images/banner1.png"
          alt="banner nicespace1"
        />
      </swiper-slide>

      <swiper-slide>
        <img
          class="w-full h-full rounded-tl-2xl rounded-br-2xl object-cover"
          src="../assets/images/banner1.png"
          alt="banner nicespace1"
        />
      </swiper-slide>
    </swiper>

    <div class="lg:flex flex-col gap-y-[18px] hidden lg:w-[25%] h-auto">
      <img src="@/assets/images/sub-banner1.png" alt="" class="w-full" />
      <img src="@/assets/images/sub-banner2.png" alt="" class="w-full" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>
