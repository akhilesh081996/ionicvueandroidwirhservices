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
        
      </ion-item>

      <ion-grid class="ion-margin">
        <ion-row>
            <!-- <ion-spinner name="lines"></ion-spinner> -->
          <ion-col>S.No</ion-col>
          <ion-col>Blog Name</ion-col>
          <ion-col>Blog Description</ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in userdata" :key="index">
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
import {
  IonPage,
  IonItem,

  IonButton,
} from "@ionic/vue";
import { logIn } from "ionicons/icons";
import { useRouter } from "vue-router";
// import axios from "axios";
import { addusers } from '@/services/userservices';

export default {
  name: "accessservices",
  components: {
    IonPage,
    IonItem,
    IonButton,
  },

  setup() {
    const { userdata } = addusers();
    console.log(userdata,'userdata')

    const router = useRouter();

    // const showAlert = async (message: any) => {
    //   const errorAlert = await alertController.create({
    //     header: "Success",
    //     message: message,
    //     buttons: ["OK"],
    //   });
    //   await errorAlert.present();
    // };

    // const handleLogin = (form: any) => {
    //   axios
    //     .get("/assets/users.json")
    //     .then((response: any) => {
    //     //   form={blogdescriptions:'', blogname:''}
    //       if (response.data) showAlert("Added Successfully");
    //       setTimeout(() => router.push("/blog-list"), 200);
    //     })
    //     .catch((error) => console.log(error));
    // };

    return {
      router,
      logIn,
      // handleLogin,
      userdata,
    };
  },
  data() {
    return {
      form: {
        blogdescriptions: "",
        blogname: "",
      },
    };
  },
};
</script>