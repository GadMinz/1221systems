<script setup lang="ts">

</script>

<template>
  <nav class="nav">
    <RouterLink to="/posts" class="link">Posts</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  margin-top: 1rem;
  font-size: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.link {
  &:hover {
    text-decoration: underline;
    color: #ff9900;
  }
}
</style>