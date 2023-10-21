<template>
  <div
    class="bg-emerald-500 text-gray-50 p-4 lg:p-6 md:w-56 lg:w-80 xl:w-1/3 flex md:flex-col items-center md:items-end justify-between md:justify-start md:gap-10 sticky top-0 z-40 md:max-h-screen flex-shrink-0 dark:bg-zinc-800 dark:text-zinc-100"
  >
    <NuxtLink to="/" class="flex gap-2 items-center">
      <IconBallBowling class="w-10 h-10" />
      <span class="text-xl font-bold uppercase tracking-wider hidden md:block"
        >Bowl</span
      >
    </NuxtLink>
    <nav class="flex md:flex-col md:gap-1 md:items-end md:text-xl md:flex-grow">
      <NuxtLink to="/" class="nav-link">
        <span>Home</span>
      </NuxtLink>
      <NuxtLink to="/blog" class="nav-link">
        <span>Blog</span>
      </NuxtLink>
      <NuxtLink to="/projects" class="nav-link">
        <span>Our work</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="nav-link">
        <span>Contact</span>
      </NuxtLink>
      <button @click="themeToggler" class="ml-2 md:ml-0 md:mt-auto">
        <IconSun v-if="$colorMode.value === 'light'" />
        <IconMoon v-else />
      </button>
    </nav>
  </div>
</template>

<script setup>
import { IconBallBowling, IconSun, IconMoon } from "@tabler/icons-vue";
const colorMode = useColorMode();
const themeToggler = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style>
.nav-link {
  @apply relative p-2 md:px-3;
}
.nav-link span {
  @apply block relative;
}
.nav-link::before {
  @apply block absolute bg-emerald-600 dark:bg-emerald-800 top-0 right-0 opacity-0 h-0 w-full md:w-0 md:h-full transition-all md:duration-500 rounded-sm;
  content: "";
}
.nav-link.router-link-exact-active::before {
  @apply h-full md:w-full opacity-100;
}
</style>
