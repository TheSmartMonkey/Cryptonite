<template>
    <section>
        <q-layout view="lHh Lpr lFf">
            <side-bar/>
            <q-page-container>  
               
            </q-page-container>
        </q-layout>
    </section>
</template>

<script>
    import sideBar from '../sideBar.vue'
    export default {
        components: { sideBar },
        name : "Home",
        
        created(){
        }
    }
</script>
