<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.loader {
  width:50px;
  height:50px;
  border-radius:50%;
  background:conic-gradient(#0000 10%,#FF9900);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;
}
@keyframes s3 {to{transform: rotate(1turn)}}
</style>