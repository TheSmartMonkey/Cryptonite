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
        <v-checkbox
          v-model="prediction"
          label="Ajouter les predictions"
          color="secondary"
          hide-details
          @click="addPredictions()"
        ></v-checkbox>
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
        :height="this.height">
      </trading-vue>
    </div>
  </section>
  
</template>

<script>

import TradingVue from 'trading-vue-js';

export default {
  name: 'Bitcoin',
  components: { TradingVue },
  data: () => ({
    prediction :false,
    Collection : {
      "chart" : {
        "type": "Candles",
        "data" : [],
      },
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
      if(this.prediction){
        localStorage.setItem('oldCollection',JSON.stringify(this.Bitcoin.collection[this.time]));
      }
      let data = this.Bitcoin.collection[this.time];
      let predictedData = this.Bitcoin.collection.predictions.simple[this.time];
      let lastTimeStamp = data[data.length - 1][0]

      console.log(lastTimeStamp,this.time);
      for(let i in predictedData){
        let element = predictedData[i];
        lastTimeStamp = lastTimeStamp + this.time
        element[0] = lastTimeStamp
      }
      console.log(predictedData);
      if(this.prediction){
        for(let i in predictedData){
          data.push(predictedData[i]);
        }    
      }else{
        this.Bitcoin.collection[this.time] =  JSON.parse(localStorage.getItem('oldCollection'));
        data = JSON.parse(localStorage.getItem('oldCollection'));
      }
      console.log(data);
      this.Collection["chart"]["data"] = data
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
      let data = this.Bitcoin.collection[timeKey];
      this.Collection["chart"]["data"] = data;
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

