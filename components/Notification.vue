<template>
  <div
    class="fixed z-50 bottom-10 left-1/2 -translate-x-1/2 text-zinc-50 p-4 min-w-[200px] rounded"
    :class="{
      'bg-emerald-500': type === 'success',
      'bg-rose-500': type === 'error',
      'bg-zinc-500': !type,
    }"
  >
    <h3>{{ title }}</h3>
    <div>{{ message }}</div>
    <div>{{ type }}</div>
  </div>
</template>

<script setup>
const store = useNotificationStore();
const { title, message, type } = storeToRefs(store);
</script>

<style></style>
