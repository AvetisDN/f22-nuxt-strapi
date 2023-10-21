<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Transition name="noti">
    <Notification v-if="show" />
  </Transition>
</template>

<script setup>
const store = useNotificationStore();
const { show } = storeToRefs(store);
</script>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all md:duration-500;
}
.page-enter-from {
  @apply opacity-0 -translate-y-80;
}
.page-leave-to {
  @apply opacity-0 translate-y-80;
}

.noti-enter-active,
.noti-leave-active {
  @apply transition-all;
}
.noti-enter-from,
.noti-leave-to {
  @apply opacity-0 translate-y-56;
}
</style>
