<template>
  <section id="main-app-container">
    <vue-recaptcha id="capsha" class="" sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X" @verify="onCaptchaVerified"></vue-recaptcha>
    <router-view/>
  </section>

</template>

<script>                                                
  import { VueRecaptcha } from 'vue-recaptcha';
  export default {
    name : "App",
    components: {
      VueRecaptcha
    },
    data(){
      return{
        ProjectManager : window.ProjectManager
      }
    },
    methods:{
      onCaptchaVerified : function(){
        var self = this;
        console.log("Capsha verify");
        this.ProjectManager.initRouter().then(function() {
          var capsha = document.getElementById("capsha");
          self.ProjectManager.collection.CryptomonaieManager.initCollection();
          capsha.classList.add('hidden')
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

