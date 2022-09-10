<template>
  <the-header
    @closeModal="closeModal()"
    @toggleModal="toggleModal()"
  ></the-header>

  <modal-category
    v-show="isShowModal"
    @updateCategory="updateCategory"
    @closeModal="closeModal()"
  ></modal-category>

  <router-view @closeModal="closeModal()" :filters="filters"></router-view>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

import type { Filters } from "@/types";
import TheHeader from "./components/layouts/the-header.vue";
import ModalCategory from "./components/modal-category.vue";

const isShowModal = ref(false);
const filters: Filters = reactive({ category: { queryValue: [7] } });

const updateCategory = (newCategory: number): void => {
  filters.category = { queryValue: [newCategory] };
};

const toggleModal = () => {
  isShowModal.value = !isShowModal.value;
  console.log("Hello");
};

const closeModal = (): void => {
  isShowModal.value = false;
};
</script>
