<template>
  <section>
    <vue-recaptcha sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X" @verify="onCaptchaVerified"></vue-recaptcha>
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
    methods:{
      onCaptchaVerified : function(){
        this.$router.push("/home");
      }
    }
  }
</script>

