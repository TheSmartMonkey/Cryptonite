<template>
  <section>
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

export default {
  name: 'LayoutDefault',

  components: {
    SideBar,
    Home
  }
}
</script>
