import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notificationStore", () => {
  const show = ref(false);
  const title = ref("");
  const message = ref("");
  const type = ref("");

  function createNotification(
    nTitle: string,
    nMessage: string,
    nType: string,
    duration = 3000
  ) {
    show.value = true;
    title.value = nTitle;
    message.value = nMessage;
    type.value = nType;

    setTimeout(() => {
      show.value = false;
      title.value = "";
      message.value = "";
      type.value = "";
    }, duration);
  }
  function destroyNotification() {
    show.value = false;
    title.value = "";
    message.value = "";
    type.value = "";
  }

  return {
    show,
    title,
    message,
    type,
    createNotification,
    destroyNotification,
  };
});
