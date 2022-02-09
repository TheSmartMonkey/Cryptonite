<template>
  <v-app>
    <v-app-bar
      color="deep-purple"
      dark
      style="max-height : 55px"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title to="/home">Cryptonity</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Bitcoin">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bitcoin</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <vue-recaptcha id="capsha" class="" sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X" @verify="onCaptchaVerified"></vue-recaptcha>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
import router from './router/index';
import Home from './views/Home.vue';
export default {
  name: 'App',
  components: {
    VueRecaptcha
  },
  data: () => ({
      ProjectManager : window.Application,
      Router : router,
      drawer: false,
      group: null,
    //
  }),
   methods:{
      initRoute : function(){
        return new Promise(resolve => {
          this.$router.addRoutes([
            {
              path: '/',
              name: 'Home',
              component: Home
            },
            {
              path: '/Bitcoin',
              name: 'Bitcoin',
              component: () => import('./views/Bitcoin.vue')
            }
          ])
          resolve();
        })
      },
      onCaptchaVerified : function(){
        var self = this;
        console.log("Capsha verify");
        this.initRoute().then(function(){
          var capsha = document.getElementById("capsha");
          capsha.classList.add('hidden');
          self.$router.push('/');
          self.ProjectManager.initCollection();
        })
      }
    }
};
</script>
<style scooped>
  #capsha{
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  .hidden{
    display: none !important;
  }
</style>
