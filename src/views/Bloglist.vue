<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blog Table</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-margin">
      <ion-item lines="none">
        <ion-button
          color="primary"
          size="small"
          slot="end"
          @click="() => router.push('/add-blog')"
        >
          Add Blog
        </ion-button>
        <ion-button
          color="primary"
          size="small"
          slot="end"
          @click="() => router.push('/accessservices')"
        >
          Add Blog
        </ion-button>
        
      </ion-item>

      <ion-grid class="ion-margin">
        <ion-row>
            <ion-spinner name="lines"></ion-spinner>
          <ion-col>S.No</ion-col>
          <ion-col>Blog Name</ion-col>
          <ion-col>Blog Description</ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in users" :key="index">
          <ion-col>{{ index + 1 }}</ion-col>
          <ion-col>{{ item.title }}</ion-col>
          <ion-col>{{ item.title }}</ion-col>
          <!-- <ion-col>{{ item.country }}</ion-col> -->
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonItem, IonButton } from "@ionic/vue";
import { logIn } from "ionicons/icons";
import { useRouter } from "vue-router";
import { IonSpinner } from '@ionic/vue';
import axios from "axios";
import { ref } from "vue";

export default {
  name: "blog-list",
  components: {
    IonPage,
    IonItem,
    IonButton,
    IonSpinner
  },

  setup() {
    const router = useRouter();
    const users = ref([]);

    const getData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      users.value = response.data;
    };

    getData();

    return {
      router,
      logIn,
      users,
    };
  },
};
</script>

<style>
ion-grid {
  --ion-grid-column-padding: 10px;
  border-collapse: collapse;
  border-style: hidden;
}

ion-grid ion-grid ion-row:first-child {
  background-color: #2dd36f;
  font-weight: bold;
}

ion-grid ion-col {
  border: 1px solid black;
  border-bottom: 0;
  border-right: 0;
}

ion-grid ion-col:last-child {
  border-right: 1px solid black;
}

ion-grid ion-row:last-child {
  border-bottom: 1px solid black;
}
</style>