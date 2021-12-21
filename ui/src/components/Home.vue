<template>
    <section>
        Home page

        <vue-recaptcha sitekey="6LejFrwdAAAAAHyJvbe2uF77QkQhkGOKtSTePO4X"></vue-recaptcha>
    </section>
</template>

<script>
    import { VueRecaptcha } from 'vue-recaptcha';
    export default {
        name : "Home",
        components: { VueRecaptcha }
    }
</script>
