<template>
  <section class="BitcoinContainer">
    <div class="nav">
      <v-row>
        <v-col cols="12" sm="2">
          <v-select
            v-model="time"
            class="ma-2"
            dense
            :items="Bitcoin.time"
            item-text="time"
            item-value="value"
            @input="setDataTime"
            label="Monaie"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2">
          <v-select
            v-model="monaie"
            class="ma-2"
            dense
            :items="Bitcoin.monaie"
            item-text="name"
            item-value="key"
            @input="setDataMonaie"
            label="Monaie"
            outlined
          ></v-select>
        </v-col>
        <!--<v-checkbox
          v-model="prediction"
          label="Ajouter les predictions"
          color="secondary"
          hide-details
          @click="addPredictions()"
        ></v-checkbox>-->
      </v-row>
    </div>
    <div class="chart">
      <trading-vue 
        :data="Collection"  
        :title-txt="monaie" 
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText"
        :width="this.width" 
        :height="this.height"
        :overlays="overlays">
      </trading-vue>
    </div>
  </section>
  
</template>

<script>

import TradingVue from 'trading-vue-js';
import Grin from '../assets/script/Grin'

export default {
  name: 'Bitcoin',
  components: { TradingVue },
  data: () => ({
    prediction :false,
    Collection : {
      ohlcv : []
    },
    width: (window.innerWidth-20),
    height: window.innerHeight/2,
    Bitcoin : window.Application.collection.CryptomonaieManager.collection.Bitcoin,
    time : null,
    monaie : null,
    colors: {
      colorBack: '#fff',
      colorGrid: '#eee',
      colorText: '#333',
    },
    overlays: [Grin],
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],
    right: null,
  }),
  created(){
    this.time = this.Bitcoin.defaultTime,
    this.monaie = this.Bitcoin.defaultMonaie,
    this.getData(this.time);
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
  },
  methods : {
    addPredictions : function(){
      localStorage.setItem('collection',)
      let data = [];
      let predictedData = this.Bitcoin.collection.predictions.simple[this.time];
      if(this.prediction){
        data = this.Bitcoin.collection[this.time];
        for(let i in predictedData){
          data.push(predictedData[i]);
        }    
      }else{
        data = this.Bitcoin.collection[this.time];
      }
      console.log(data);
      this.Collection.ohlcv = data
    },
    setDataTime : function(itemSelected){
      this.time = itemSelected;
      this.getData(this.time);
    },
    setDataMonaie : function(itemSelected){
      let self = this;
      this.monaie = itemSelected;
      this.Bitcoin.getDataCryptoBitcoin(this.monaie).then(function() {
        self.getData(self.time);
      });
    },
    getData : function(timeKey){
      this.Collection.ohlcv = this.Bitcoin.collection[timeKey];
      console.log(this.Collection);
    },
    onResize() {
        this.width = (window.innerWidth-20)
        this.height = window.innerHeight/2
    }
  }
};
</script>

<style scoped>
  .BitcoinContainer{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .nav{
    width: 100%;
    height: 50px;
  }
</style>

