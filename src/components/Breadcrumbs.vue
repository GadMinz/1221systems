<script setup lang="ts">
import { useBreadcrumbsStore } from "@/store/breadcrumbs.ts";
import { storeToRefs } from "pinia";

const store = useBreadcrumbsStore();
const { breadcrumbs } = storeToRefs(store);
</script>

<template>
  <ul class="breadcrumbs" v-if="breadcrumbs.length > 1">
    <li
      class="breadcrumbs-item"
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.name"
    >
      <RouterLink :to="breadcrumb.link">{{ breadcrumb.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  &-item {
    text-decoration: underline;
    position: relative;
    &:hover {
      opacity: 0.7;
    }
    &:after {
      content: "/";
      position: absolute;
      right: -0.6rem;
    }
    &:last-child {
      text-decoration: none;
      cursor: default;
      pointer-events: none;
      &:after {
        display: none;
      }
    }
  }
}
</style>
