<template>
  <section id="main-app-container">
    <vue-recaptcha id="capsha" class="" sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X" @verify="onCaptchaVerified"></vue-recaptcha>
    <router-view/>
  </section>

</template>

<script>                                                
  import { VueRecaptcha } from 'vue-recaptcha';
  import ProjectManager from './assets/script/ProjectManager';

  export default {
    name : "App",
    components: {
      VueRecaptcha
    },
    data(){
      return{
        ProjectManager : new ProjectManager()
      }
    },
    methods:{
      onCaptchaVerified : function(){
        var self = this;
        console.log("Capsha verify");
        this.ProjectManager.initRouter().then(function() {
          var capsha = document.getElementById("capsha");
          capsha.classList.add('hidden')
          self.ProjectManager.initCollection();
          self.$router.push("/home");
        })
      }
    }
  }
</script>

<style>
  #main-app-container{
    height: 100%;
  }
  #capsha{
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  .hidden{
    display: none;
  }
</style>

