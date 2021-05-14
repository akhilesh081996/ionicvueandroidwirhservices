<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Component Interaction</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:title="post.title"
      ></blog-post>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { defineComponent } from "vue";

import blog from "./blog.vue";

export default defineComponent({
  name: "blog-container",
  components: {
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonHeader,
    blog,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
});

defineComponent({
  name: "blog-post",
  props: ["title"],
  template: "<h3>{{ title }}</h3>",
});
</script>