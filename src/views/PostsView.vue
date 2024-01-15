<script setup lang="ts">
import Posts from "@/components/Posts.vue";
import { useBreadcrumbsStore } from "@/store/breadcrumbs.ts";
import {onBeforeMount, onBeforeUnmount} from "vue";

const { setBreadcrumbs, resetBreadcrumbs } = useBreadcrumbsStore();
onBeforeMount(() => {
  setBreadcrumbs([
    { name: "Главная", link: "/" },
    { name: "Список постов", link: "/posts" },
  ]);
});
onBeforeUnmount(() => {
  resetBreadcrumbs();
});
</script>

<template>
  <Posts />
</template>
