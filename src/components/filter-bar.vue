<template>
  <div class="mx-4 flex gap-4 lg:hidden">
    <div class="flex gap-1 items-center justify-between">
      <img src="../assets/images/faders.png" alt="" />
      <span class="font-semibold text-xs text-primary">Bộ lọc</span>
    </div>

    <div class="flex gap-1 items-center justify-between">
      <img src="../assets/images/ArrowsDownUp.png" alt="" class="h-4" />
      <span class="font-semibold text-xs text-primary">Nổi bật nhất</span>
    </div>
  </div>

  <div class="lg:px-[120px] hidden lg:flex items-center mt-6 mb-4">
    <div class="flex gap-2">
      <div
        v-for="filterOption in filterOptions"
        :key="filterOption.id"
        class="bg-white p-3 rounded-lg flex gap-1 items-center"
      >
        <span class="font-semibold text-xs">{{
          filterOption.nameFilterOption
        }}</span>
        <img src="@/assets/images/down-arrow.png" alt="" />
      </div>
    </div>

    <div class="w-[26px] h-0 border-grey-4 border-[1px] rotate-90"></div>

    <div class="p-3 flex items-center gap-2 bg-white rounded-[100px] mr-2">
      <input type="checkbox" name="" id="" />
      <span class="text-xs">Chỉ hiển thị ưu đãi, khuyến mại</span>
    </div>

    <div class="flex gap-2">
      <div
        v-for="filter in filterList"
        :key="filter.id"
        class="bg-white p-3 flex items-center gap-1 rounded-[100px]"
      >
        <span class="text-xs">{{ filter.nameFilter }} </span>
        <img src="@/assets/images/down-arrow.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const filterOptions = ref([
  { id: 1, nameFilterOption: "Sắp xếp: Nổi bật nhất" },
  { id: 2, nameFilterOption: "3 bộ lọc áp dụng" },
]);

const filterList = ref([
  { id: 1, nameFilter: "Khoảng giá" },
  { id: 2, nameFilter: "SiliconZ, CyberChair" },
  { id: 3, nameFilter: "Chất liệu lưng ghế" },
  { id: 4, nameFilter: "Thương hiệu" },
]);
</script>
