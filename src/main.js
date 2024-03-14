import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import router from './router'
// import { VBtn, VCard, VDialog, VDivider, VForm, VTextField } from 'vuetify/lib';

// import firebase from 'firebase/app'
// import 'firebase/firestore'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false
// Vue.use(Vuetify)
// Vue.use(VBtn);
// Vue.use(VCard);
// Vue.use(VDialog);
// Vue.use(VDivider);
// Vue.use(VForm);
// Vue.use(VTextField);

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  router,

  vuetify,
  render: h => h(App)
}).$mount('#app')
