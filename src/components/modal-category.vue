<template>
  <div
    class="absolute top-[70px] left-[258px] w-[244px] p-3 hidden lg:flex flex-col gap-[10px] bg-white rounded-lg shadow-[0px_4px_12px_rgba(0, 0, 0, 0.05)] z-10"
    @click="$emit('closeModal')"
  >
    <div class="flex flex-col">
      <div
        class="p-3 font-semibold text-sm"
        :class="selectedIndex === category.id ? 'active' : null"
        v-for="category in categoryList"
        :key="category.id"
        @click="handleClickModal(category.id, category.category)"
      >
        {{ category.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const categoryList = ref([
  {
    id: 1,
    text: "Ghế công thái học",
    category: 21,
  },
  {
    id: 2,
    text: "Bàn nâng hạ",
    category: 22,
  },
  {
    id: 3,
    text: "Bàn phím",
    category: 7,
  },
  {
    id: 4,
    text: "Màn hình",
    category: 19,
  },
  {
    id: 5,
    text: "Trang trí bàn làm việc",
    category: 20,
  },
]);

const selectedIndex = ref(3);

const emit = defineEmits<{
  (e: "updateCategory", category: number): void;
}>();

const handleClickModal = (id: number, category: number) => {
  selectedIndex.value = id;
  emit("updateCategory", category);
};
</script>

<style>
.active {
  background: #eaf5ff;
  border-radius: 4px;
}
</style>
