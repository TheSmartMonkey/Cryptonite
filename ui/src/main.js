import ProjectManager from "./assets/script/ProjectManager";
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import router from "./router";
var projectManager = new ProjectManager();
window.ProjectManager = projectManager;

var app = createApp(App);
app.use(router).use(Quasar, quasarUserOptions).mount('#app');




