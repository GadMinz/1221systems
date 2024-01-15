<script setup lang="ts">
import { computed, onMounted, ref, Ref } from "vue";
import { UsersApi } from "@/api";
import { IUser } from "@/types.ts";
import Preloader from "@/components/Preloader.vue";

const props = defineProps({
  userId: {type: Number, required: true},
});
const user: Ref<IUser | null> = ref(null);
const isLoading = ref(false);
onMounted(async () => {
  try {
    isLoading.value = true;
    const { data } = await UsersApi.getInfo(props.userId);
    user.value = data;
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});

const fixUrl = computed(() => {
  if (!user) return "";
  if (
    user.value?.website.startsWith("http://") ||
    user.value?.website.startsWith("https://")
  ) {
    return user.value.website;
  }
  return `https://${user.value?.website}`;
});
</script>

<template>
  <Preloader v-if="isLoading" />
  <ul class="user-info" v-else-if="user">
    <li class="user-info-item">
      Имя: <span>{{ user.name }}</span>
    </li>
    <li class="user-info-item">
      Email: <a :href="`mailto:${user.email}`">{{ user.email }}</a>
    </li>
    <li class="user-info-item">
      Телефон: <a :href="`tel:+${user.phone}`">{{ user.phone }}</a>
    </li>
    <li class="user-info-item">
      Website:
      <a :href="fixUrl" target="_blank">{{ user.website }}</a>
    </li>
  </ul>
  <div v-else class="not-found">Пользователь не найден</div>
</template>

<style scoped lang="scss">
.user-info {
  &-item {
    margin-bottom: 10px;
    font-weight: 600;
    a {
      font-weight: 400;
      text-decoration: underline;
      &:hover {
        opacity: 0.7;
      }
    }
    span {
      font-weight: 400;
    }
  }
}
</style>
