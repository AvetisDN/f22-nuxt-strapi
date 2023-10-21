<template>
  <div class="flex flex-col gap-3">
    <h2
      class="flex gap-2 items-center text-2xl font-bold text-gray-500 dark:text-zinc-300"
    >
      <IconNews size="28" />
      Recent Articles
    </h2>
    <div class="flex flex-col gap-3">
      <ArticleCard
        v-for="item in articles"
        :title="item.attributes.title"
        :slug="item.attributes.slug"
        :intro="item.attributes.intro"
        :categories="item.attributes.categories.data"
        :date="item.attributes.publishedAt"
        :cover="item.attributes.cover.data.attributes.formats.small.url"
      />
    </div>
  </div>
</template>

<script setup>
import { IconNews } from "@tabler/icons-vue";
import ArticleCard from "./ArticleCard.vue";
defineProps({
  articles: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
