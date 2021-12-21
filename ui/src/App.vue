<template>
  <section>
    <vue-recaptcha sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X" @verify="onCaptchaVerified"></vue-recaptcha>
    <q-layout view="lHh Lpr lFf">
      <side-bar/>
      <q-page-container>  
        <home/>
      </q-page-container>
    </q-layout>
  </section>
</template>

<script>
  import Home from './components/Home.vue'
  import SideBar from './sideBar.vue'
  import { VueRecaptcha } from 'vue-recaptcha';
  export default {
    name: 'LayoutDefault',
    components: {
      SideBar,
      Home,
      VueRecaptcha
    },
    methods : {
      onCaptchaVerified : function(){
          var app = document.getElementById("layoutApp");
          app.classList.remove('hidden');
      },
    }
  }
</script>

<style scoped>
  .hidden {
    display: none;
  }
</style>
