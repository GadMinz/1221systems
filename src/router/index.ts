import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import PostsView from "@/views/PostsView.vue";
import PostView from "@/views/PostView.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsView,
    },
    {
      path: "/posts/:id",
      name: "postDetail",
      component: PostView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
