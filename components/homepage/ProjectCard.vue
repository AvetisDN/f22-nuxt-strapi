<template>
  <NuxtLink
    :to="`/projects/${project.attributes.slug}`"
    class="flex flex-col gap-2 p-3 bg-zinc-800 rounded group"
  >
    <div class="h-[90vw] sm:h-56 overflow-hidden rounded-sm">
      <NuxtImg
        :src="url + project.attributes.cover.data.attributes.formats.medium.url"
        :alt="project.attributes.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <h3 class="text-xl">
      {{ project.attributes.title }}
    </h3>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
const url = useStrapiMedia("");
</script>

<style></style>
