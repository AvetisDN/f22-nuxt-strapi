<template>
  <div>
    <h2
      class="flex gap-2 items-center text-2xl font-bold text-gray-500 dark:text-zinc-300 mt-4"
    >
      <IconApiApp size="28" />
      Latest projects
    </h2>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <HomepageProjectCard v-for="item in projects" :project="item" />
    </div>
  </div>
</template>

<script setup>
import { IconApiApp } from "@tabler/icons-vue";
defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
