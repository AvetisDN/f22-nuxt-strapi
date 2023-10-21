<template>
  <div class="flex flex-col gap-4 lg:gap-6">
    <HomepageRecentBlog :articles="articles" />
    <HomepageRecentProjects :projects="projects" />
  </div>
</template>

<script setup>
const { find } = useStrapi();

const articles = ref([]);
const projects = ref([]);
onMounted(async () => {
  const response = await find("articles", {
    populate: "*",
    sort: "updatedAt:desc",
    pagination: {
      limit: 4,
      start: 0,
    },
  });
  articles.value = response.data;
  const response2 = await find("projects", {
    populate: "*",
    sort: "updatedAt:desc",
    pagination: {
      limit: 4,
      start: 0,
    },
  });
  projects.value = response2.data;
});
</script>

<style></style>
