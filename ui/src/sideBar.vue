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

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-green-1">
            <q-list >
                <q-item  v-for="route in routes" exact :key="route.path" :to="route.path">
                    <q-item-section avatar>
                        <q-icon :name="route.name.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{route.name.full}}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>
    </section>
</template>

<script>
    import { ref } from 'vue';
    export default{
        name : "sideBar",
        data(){
            return {
                routes : this.$router.getRoutes()
            }
        },
        created(){
            console.log(this.routes);
        },
    setup () {
        return {
            leftDrawerOpen: ref(false)
        }
    },
  }
</script>
