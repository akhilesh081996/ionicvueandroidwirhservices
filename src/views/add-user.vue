<template>
  <ion-page>
    <form @submit.prevent="handleLogin(form)">
      <ion-item>
        <h3>Add User</h3>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input v-model="form.name" id="name" required></ion-input>
      </ion-item>

      <ion-label position="floating" style="margin: 10px">Gender</ion-label>

      <ion-item>
        <div style="margin: 5px">
          <input type="radio" id="one" value="male" v-model="form.gender" />
          <label for="one">Male</label>
        </div>

        <div style="margin: 5px">
          <input type="radio" id="two" value="female" v-model="form.gender" />
          <label for="female">Female</label>
        </div>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Country</ion-label>
        <ion-input v-model="form.country" id="country" required></ion-input>
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
  name: "add-user",
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
          console.log(form);
          if (response.data) showAlert("Added Successfully");
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
        name: "",
        gender: "",
        country: "",
      },
    };
  },
};
</script>