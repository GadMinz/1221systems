<script setup lang="ts">
import { IPost } from "@/types.ts";
import { usePostsStore } from "@/store/posts.ts";

const props = defineProps<{ post: IPost }>();
const { id, title, body } = props.post;

const store = usePostsStore();
const { deletePost } = store;

const onMouseDown = (e: MouseEvent) => {
  if (e.button === 2) {
    e.preventDefault();
    deletePost(id);
  }
};
</script>

<template>
  <RouterLink
    :to="/posts/ + id.toString()"
    class="post"
    @contextmenu="onMouseDown"
    title="Delete post - Right Click"
  >
    <div class="post__title">
      {{ title }}
    </div>
    <div class="post__body">
      {{ body }}
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.post {
  display: block;
  border-radius: 10px;
  background: #ffffff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  &:hover {
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.3);
  }
  &__title {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  &__body {
    text-align: justify;
  }
}
</style>
