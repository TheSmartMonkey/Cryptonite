<template>
    <q-layout view="lHh Lpr lFf">
        <side-bar/>
        <q-page-container>  
            <router-view></router-view>
        </q-page-container>
    </q-layout>
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
