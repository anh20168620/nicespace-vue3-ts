<template>
  <img
    :src="baseUrlImage + props.urlImage"
    alt=""
    class="h-full w-full rounded-tl-2xl"
  />
</template>

<script lang="ts" setup>
const baseUrlImage = "https://media-api-beta.thinkpro.vn/";

const props = defineProps<{ urlImage: string }>();
</script>
