import { createApp, } from 'vue'
import App from './App.vue'
import router from './router';


import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

const app = createApp(App)
  .use(IonicVue)
  .use(router);
app.config.globalProperties.$filters = {
  timechange(value) {
     console.log(value.toUpperCase(),'value')
     const date1 = value.toUpperCase()
    //  const date1 = moment(value).format("DD-MM-YYYY");
    return date1
  }
}

// Axios.interceptors.request.use((config) => {
//   const params = new URLSearchParams();
//   params.append('hai','kgffg');
//   config.params = params ;
//    return config ;
// })
const isAuthenticated = 'false'
localStorage.setItem('token',isAuthenticated)

router.isReady().then(() => {
  app.mount('#app');
});