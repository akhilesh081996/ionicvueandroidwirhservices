<template>
  <ion-page>
    <form @submit.prevent="handleLogin(form)">
      <ion-item>
        <h3>Add Blog</h3>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Blog Name</ion-label>
        <ion-input v-model="form.blogname" id="blogname" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Blog Descriptions</ion-label>
        <!-- <ion-textarea  v-model="form.blogdescriptions" id="blogdescriptions" required placeholder="Enter more information here..."></ion-textarea> -->
        <ion-input v-model="form.blogdescriptions" id="blogdescriptions" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-button type="submit"> Submit </ion-button>
      </ion-item>
    </form>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  alertController,
} from "@ionic/vue";
import { logIn } from "ionicons/icons";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "add-blog",
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
  },

  setup() {
    const router = useRouter();

    const showAlert = async (message: any) => {
      const errorAlert = await alertController.create({
        header: "Success",
        message: message,
        buttons: ["OK"],
      });
      await errorAlert.present();
    };

    const handleLogin = (form: any) => {
      axios
        .get("/assets/users.json")
        .then((response: any) => {
        //   form={blogdescriptions:'', blogname:''}
          if (response.data) showAlert("Added Successfully");
          setTimeout(() => router.push("/blog-list"), 200);
        })
        .catch((error) => console.log(error));
    };

    return {
      router,
      logIn,
      handleLogin,
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