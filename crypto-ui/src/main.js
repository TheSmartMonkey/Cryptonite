import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ProjectManager from './assets/script/ProjectManager'

Vue.config.productionTip = false

var app = new ProjectManager();
window.Application = app;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
