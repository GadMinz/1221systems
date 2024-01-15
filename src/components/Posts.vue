<script setup lang="ts">
import { usePostsStore } from "@/store/posts.ts";
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import PostsItem from "@/components/PostsItem.vue";
import Preloader from "@/components/Preloader.vue";

const store = usePostsStore();
const { posts, loading } = storeToRefs(store);
const { fetchPosts } = store;
onBeforeMount(() => {
  fetchPosts();
});
</script>

<template>
  <div class="wrapper">
    <Preloader v-if="loading" />
    <PostsItem v-else v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped lang="scss"></style>
