<template>
  <div
    class="flex flex-col md:flex-row gap-3 p-3 bg-gray-50 dark:bg-zinc-900 shadow rounded"
  >
    <img
      :src="url + cover"
      :alt="title"
      class="md:w-40 h-40 rounded object-cover"
    />
    <div class="flex flex-col gap-2">
      <NuxtLink :to="`/blog/${slug}`">
        <h3 class="text-lg font-semibold text-gray-700 dark:text-zinc-100">
          {{ title }}
        </h3>
      </NuxtLink>
      <div
        class="flex text-gray-500 dark:text-zinc-400 font-normal text-sm flex-wrap justify-between"
      >
        <div class="flex gap-2">
          <div v-for="item in categories">
            {{ item.attributes.Title }}
          </div>
        </div>
        <div>
          {{ moment(date).format("D.MM.YYYY") }}
        </div>
      </div>
      <div class="text-sm">
        {{ intro }}
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
defineProps({
  title: String,
  intro: String,
  slug: String,
  categories: Array,
  date: String,
  cover: String,
});

const url = useStrapiMedia("");
</script>

<style scoped></style>
