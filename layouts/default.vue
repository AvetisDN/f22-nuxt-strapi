<template>
  <div
    class="font-medium min-h-screen bg-gray-100 text-gray-800 dark:bg-zinc-950 dark:text-zinc-200 flex flex-col md:flex-row"
  >
    <Navigation />
    <div class="p-4 lg:p-6 flex-grow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
