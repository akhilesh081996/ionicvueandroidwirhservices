<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Mobile App</ion-title>
        </ion-toolbar>
      </ion-header>


    
      <ion-grid >
          <!-- <ion-content slot="center"> -->
            <strong>Ready to create an app</strong> <br> <hr>
            <ion-button @click="() => router.push('/login')" >Login</ion-button>
            <ion-button @click="() => router.push('/add-user')">Signup</ion-button>
          <!-- </ion-content> -->
    
      </ion-grid>

      
    </ion-page>
  </template>
  
  <script lang="ts">
  import {
    IonPage,
    IonButton,
    alertController,
    IonGrid,
  } from "@ionic/vue";
  import { logIn } from "ionicons/icons";
  import { useRouter } from "vue-router";
  import axios from "axios";
  
  export default {
    name: "landing",
    components: {
      IonPage,
      IonButton,
      IonGrid
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