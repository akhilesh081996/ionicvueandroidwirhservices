<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Mobile App</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item lines="full">
        <ion-icon slot="start" name="moon"></ion-icon>
        <ion-label>
        <ion-text color="dark">Dark Mode</ion-text>
        </ion-label>
        <ion-toggle id="themeToggle" slot="end" @click="onClick($event)"></ion-toggle>
        </ion-item>
        </ion-list>
    
      <ion-grid >
          <!-- <ion-content slot="center"> -->
            <strong>Ready to create an app</strong> <br> <hr>
            <ion-button class="loginbtn" @click="() => router.push('/login')" >Login</ion-button>
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
    IonToggle,
  } from "@ionic/vue";
  import { logIn } from "ionicons/icons";
  import { useRouter } from "vue-router";
  import axios from "axios";
  import DarkModeSwitch from 'vue-dark-mode-switch'
  import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'
  
  export default {
    name: "landing",
    components: {
      IonPage,
      IonButton,
      IonGrid,
      IonToggle
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

    methods: {
      onClick(event){
const  systemDark = window.matchMedia("(prefers-color-scheme: dark)")
document.body.setAttribute('class', 'light')
console.log(event.target.ariaChecked,'(ionChange)')
console.log(event)
// systemDark.addListener(this.colorTest)
if(event.target.ariaChecked === 'false'){
document.body.setAttribute('class', 'dark')
}else{
document.body.setAttribute('class', 'light')
}
}
  },

    data() {
      return {
        form: {
          username: "",
          password: "",
          isDarkModeEnabled: true
        },
      };
    },
  };
  </script>

  <style>
    .loginbtn{
      background-color: var(--ion-color-primary);
    }
  </style>