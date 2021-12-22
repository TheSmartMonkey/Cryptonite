<template>
  <section>
    <vue-recaptcha sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X" @verify="onCaptchaVerified"></vue-recaptcha>
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
          self.$router.push("/home");
        })
      }
    }
  }
</script>

