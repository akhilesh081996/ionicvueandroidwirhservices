<template>
  <ion-page>
    <form @submit.prevent="handleLogin(form)">
      <ion-item>
        <h3>Login</h3>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Username</ion-label>
        <ion-input v-model="form.username" id="username" required></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input
          type="password"
          v-model="form.password"
          id="password"
          required
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-button type="submit"> Login </ion-button>
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
  name: "SignIn",
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
        .get("/assets/login.json")
        .then((response: any) => {
          console.log(form);
          if (response.data) showAlert(JSON.stringify(response.data));
          setTimeout(() => router.push("/home"), 200);
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
        username: "",
        password: "",
      },
    };
  },
};
</script>