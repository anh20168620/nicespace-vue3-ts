<template>
  <div @click="$emit('closeModal')">
    <slider-banner></slider-banner>

    <filter-bar></filter-bar>

    <brand-bar></brand-bar>

    <div v-if="isError">
      <div>Loi me roi</div>

      <button @click="fetchProductList">Thu lai</button>
    </div>

    <div
      v-else
      class="grid grid-cols-2 gap-x-[7px] gap-y-[8px] mx-4 lg:mx-[120px] lg:grid-cols-6 lg:gap-x-[8px]"
    >
      <product-card
        v-for="product in productList"
        :key="product.id"
        :product="product"
      ></product-card>
    </div>

    <button
      class="mx-4 lg:mx-[120px] mt-4 w-[calc(100%-2rem)] lg:w-[calc(100%-240px)] py-[10px] rounded-lg bg-btn_bg"
      @click="fetchMoreProduct"
    >
      Xem thêm
    </button>

    <div
      v-if="isFetching"
      class="grid grid-cols-2 gap-x-[7px] gap-y-[8px] mx-4 lg:mx-[120px] lg:mb-32"
    >
      loading ...
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

import { fetchProduct } from "@/services";
import type { Filters, Product } from "@/types";
import SliderBanner from "@/components/slider-banner.vue";
import BrandBar from "@/components/brand-bar.vue";
import ProductCard from "@/components/product-card.vue";
import FilterBar from "@/components/filter-bar.vue";

const isLoading = ref(false);
const isFetching = ref(false);
const isError = ref(false);

const productList = ref<Product[]>([]);

const props = defineProps<{
  filters: Filters;
}>();

const state = reactive({
  search: "",
  cur_page: 1,
  sort: 0,
  filters: props.filters,
  per_page: 22,
});

const fetchProductList = async () => {
  try {
    isError.value = false;
    isLoading.value = true;
    isFetching.value = true;
    const { data } = await fetchProduct(state);

    productList.value = data;
  } catch (error) {
    console.log(error);

    isError.value = true;
  } finally {
    isLoading.value = false;
    isFetching.value = false;
  }
};

const fetchMoreProduct = async () => {
  state.cur_page += 1;

  try {
    isError.value = false;
    isFetching.value = true;

    const { data } = await fetchProduct(state);

    productList.value = [...productList.value, ...data];
  } catch (error) {
    console.log(error);

    isError.value = true;
  } finally {
    isFetching.value = false;
  }
};

watch(props.filters, () => {
  fetchProductList();
});

fetchProductList();
</script>
