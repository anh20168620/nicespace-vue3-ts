<template>
  <div class="bg-white rounded-tl-2xl rounded-br-2xl">
    <div class="">
      <base-image :urlImage="props.product.images[0]"></base-image>
    </div>

    <div class="p-2 flex flex-col gap-1">
      <div class="font-semibold text-xs leading-[18px]">
        {{ props.product.name }}
      </div>

      <div class="flex gap-1 items-baseline text-[#FE3464]">
        <span class="text-xs leading-[18px] text-[#6B7075]">Từ</span>
        <span class="text-base font-semibold" v-if="props.product.sale_price">{{
          formatSalePriceToVnd
        }}</span>
        <span class="text-base font-semibold" v-else>{{
          formatPriceToVnd
        }}</span>
        <span class=""></span>
      </div>

      <div class="" v-if="props.product.sale_price">
        <span class="text-[14px] line-through">{{ formatPriceToVnd }}</span>
        <span class="font-semibold text-xs px-0.5 rounded-sm bg-[#FFF3F5]"
          >-{{ percentagePromo }}%</span
        >
      </div>

      <div class="flex items-baseline gap-1">
        <span class="text-xs leading-[18px]">Màu</span>
        <div
          class="w-3 h-3 rounded-sm border-[0.5px] border-slate-300"
          v-for="color in props.product.colors"
          :style="{ backgroundColor: color.code }"
        ></div>
      </div>
    </div>

    <div
      class="flex gap-1 py-[10px] px-2 items-center"
      v-if="props.product.sale_price"
    >
      <div class="bg-[#FE3464] p-0.5 rounded-full">
        <img src="@/assets/images/gift.png" alt="gift nicespace" />
      </div>
      <span class="text-xs font-semibold leading-[18px] text-[#FE3464]"
        >Giảm giá</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { Product } from "@/types";
import BaseImage from "./ui/base-image.vue";

const props = defineProps<{
  product: Product;
}>();

const formatSalePriceToVnd = computed(() => {
  return props.product.sale_price
    .toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
    .slice(0, -3);
});

const formatPriceToVnd = computed(() => {
  return props.product.price
    .toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
    .slice(0, -3);
});

const percentagePromo = computed(() => {
  return Math.round(
    ((props.product.price - props.product.sale_price) / props.product.price) *
      100
  );
});
</script>

<style></style>
