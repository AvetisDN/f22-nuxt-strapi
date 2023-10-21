<template>
  <div class="flex justify-center">
    <form
      class="w-full max-w-[440px] flex flex-col gap-3"
      @submit.prevent="onSubmit"
    >
      <div>
        <input type="text" required placeholder="Name" v-model="name" />
      </div>
      <div>
        <input type="email" required placeholder="Email" v-model="email" />
      </div>
      <div>
        <textarea
          rows="4"
          required
          placeholder="Message"
          v-model="message"
        ></textarea>
      </div>
      <button>
        <IconSend />
        SEND
      </button>
    </form>
  </div>
</template>

<script setup>
const { createNotification, destroyNotification } = useNotificationStore();
import { IconSend } from "@tabler/icons-vue";
const { create } = useStrapi();

const name = ref("");
const email = ref("");
const message = ref("");

const onSubmit = async () => {
  const body = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  const { data } = await create("customer-messages", body);
  if (data) {
    createNotification(
      "Success",
      "Your message was sent! We'll get you in touch",
      "success"
    );
  } else {
    createNotification("Error", "Something went wrong. Try again", "error");
  }
};
</script>

<style scoped>
input,
textarea {
  @apply w-full p-3 resize-none rounded outline-none transition-all text-xl bg-zinc-50 border-2 border-zinc-200 focus:border-emerald-500 dark:bg-zinc-900 dark:border-zinc-700 dark:focus:border-emerald-500;
}
button {
  @apply bg-emerald-500 text-emerald-50 flex items-center justify-center gap-2 p-4 rounded font-semibold;
}
</style>
