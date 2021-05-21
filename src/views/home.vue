<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>User Table</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-margin">
      <ion-item lines="none">
        <ion-button
          color="primary"
          size="small"
          slot="end"
          @click="() => router.push('/add-user')"
        >
          Add User
        </ion-button>
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
        @click="() => router.push('/image')"
      >
       Click Image
      </ion-button> <br>
      </ion-item>
        <ion-item>
        <ion-toggle @ionChange="onClick($event)"  v-model="language" slot="end"></ion-toggle>
      </ion-item>
    

      <ion-grid class="ion-margin">
        <ion-row>
          <ion-col>S.No</ion-col>
          <ion-col>Name</ion-col>
          <ion-col>Gender</ion-col>
          <ion-col>Country</ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in users" :key="index">
          <ion-col>{{ index + 1 }}</ion-col>

       <ion-label >{{ $filters.timechange(item.name) }}</ion-label>
          <ion-col>{{ item.gender }}</ion-col>
          <ion-col>{{ item.country }}</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonItem, IonButton ,IonToggle  } from "@ionic/vue";
import { logIn } from "ionicons/icons";
import { useRouter } from "vue-router";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    IonPage,
    IonItem,
    IonButton,
    IonToggle 
  },

  setup() {
    const router = useRouter();
    const users = ref([]);

    const getData = async () => {
      const response = await axios.get("/assets/users.json");
      users.value = response.data;
    };

    getData();
    
    return {
      router,
      logIn,
      users,
     

    };
  },
  methods: {
    async onClick(event) {
       console.log(event.target.ariaChecked);
   
      
    },
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