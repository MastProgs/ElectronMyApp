import Vue from 'vue'
// import App from './App.vue'
import FirstMainApp from './FirstMainApp.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(FirstMainApp)// h => h(App)
}).$mount('#app')
