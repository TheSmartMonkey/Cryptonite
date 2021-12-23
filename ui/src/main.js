import ProjectManager from "./assets/script/ProjectManager";
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

var projectManager = new ProjectManager();

projectManager.initialisationProject().then(router => {
    createApp(App).use(router).use(Quasar, quasarUserOptions).mount('#app');
})

window.ProjectManager = projectManager;


