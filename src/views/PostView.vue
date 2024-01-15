<script setup lang="ts">
import PostDetail from "@/components/PostDetail.vue";
import { useBreadcrumbsStore } from "@/store/breadcrumbs.ts";
import { onBeforeMount, onBeforeUnmount, ref, Ref } from "vue";
import { IPost } from "@/types.ts";
import { useRoute, useRouter } from "vue-router";
import { PostsApi } from "@/api";
const { setBreadcrumbs, resetBreadcrumbs } = useBreadcrumbsStore();

const post: Ref<IPost | null> = ref(null);
const isLoading = ref(false);
const route = useRoute();
const router = useRouter();

const id = route.params.id;
onBeforeMount(async () => {
  setBreadcrumbs([
    { name: "Главная", link: "/" },
    { name: "Список постов", link: "/posts" },
    { name: "Пост №" + id, link: "/posts" },
  ]);
  try {
    isLoading.value = true;
    const { data } = await PostsApi.getOne(+id);
    post.value = data;
  } catch (err) {
    console.error(err);
    await router.push("/");
  } finally {
    isLoading.value = false;
  }
});
onBeforeUnmount(() => {
  resetBreadcrumbs();
});
</script>

<template>
  <PostDetail :post="post" :is-loading="isLoading" />
</template>

<style scoped lang="scss"></style>
