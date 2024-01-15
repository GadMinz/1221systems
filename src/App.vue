<script setup lang="ts">
import { RouterView } from "vue-router";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
</script>

<template>
  <main>
    <Breadcrumbs />
    <RouterView />
  </main>
</template>
