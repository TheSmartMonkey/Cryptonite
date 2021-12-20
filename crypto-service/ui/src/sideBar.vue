<template>
    <section>
        <q-header elevated class="basic" style="background-color: #419547">
            <q-toolbar>
                <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
                icon="menu"
                />

                <q-toolbar-title>Cryptonite</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-green-1"
        >
        
        </q-drawer>
    </section>
</template>

<script>
    import { ref } from 'vue'
    export default{
        name : "sideBar",

        setup () {
            return {
            leftDrawerOpen: ref(false)
        }
    },
  }
</script>
