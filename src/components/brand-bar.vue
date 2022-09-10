<template>
  <div
    class="mx-4 lg:mx-[120px] mt-4 mb-4 lg:mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar"
  >
    <div
      class="w-[102px] lg:w-[126px] h-[34px] lg:h-[42px] py-[9px] lg:py-[11.12px] flex-shrink-0 rounded-xl bg-white"
      v-for="brand in brandList"
      :key="brand.id"
    >
      <img
        :src="getImageUrl(brand.image)"
        :alt="brand.alt"
        class="mx-auto h-full object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const getImageUrl = (name: string): string => {
  return new URL(`.././assets/images${name}`, import.meta.url).href;
};

interface Brand<T, A, B> {
  id: T;
  image: A;
  alt: B;
}

const brandList: Brand<number, string, string>[] = reactive([
  { id: 1, image: "/thinkpad-logo.png", alt: "logo thinkpad" },
  { id: 2, image: "/legion-logo.png", alt: "logo legion" },
  { id: 3, image: "/ideapad-logo.png", alt: "logo ideapad" },
  { id: 4, image: "/thinkpad-logo.png", alt: "logo thinkpad" },
  { id: 5, image: "/legion-logo.png", alt: "logo legion" },
  { id: 6, image: "/ideapad-logo.png", alt: "logo ideapad" },
  { id: 7, image: "/thinkpad-logo.png", alt: "logo thinkpad" },
  { id: 8, image: "/legion-logo.png", alt: "logo legion" },
]);
</script>
