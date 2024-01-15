<script setup lang="ts">
import { IPost } from "@/types.ts";
import Preloader from "@/components/Preloader.vue";
import UserInfo from "@/components/UserInfo.vue";

defineProps<{ post: IPost | null; isLoading: boolean }>();
</script>

<template>
  <Preloader v-if="isLoading" />
  <div v-else-if="post" class="post-detail">
    <div class="post">
      <div class="title">{{ post.title }}</div>
      <div class="desc">{{ post.body }}</div>
    </div>
    <div class="author">
      <div class="title">Об авторе:</div>
      <UserInfo :user-id="post.userId" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-detail {
  padding: 20px 0;
}
.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.post {
  margin-bottom: 30px;
}
</style>
