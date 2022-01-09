<template>
  <div class="about">
    <trading-vue 
      class="chart"
      :data="Collection"  
      title-txt="BTCUSD" 
      :color-back="colors.colorBack"
      :color-grid="colors.colorGrid"
      :color-text="colors.colorText"
      :width="this.width" 
      :height="this.height">
    </trading-vue>
  </div>
</template>

<script>

import TradingVue from 'trading-vue-js';
export default {
  name: 'Bitcoin',
  components: { TradingVue },
  data: () => ({
    Collection : [[]],
    width: window.innerWidth,
    height: window.innerHeight/2,
    Bitcoin : window.Application.collection.CryptomonaieManager.collection.Bitcoin,
    colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            }
  }),
  created(){
    this.getData();
  },
  mounted() {
        window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
  },
  methods : {
    getData : function(){},
    onResize() {
            this.width = window.innerWidth
            this.height = window.innerHeight/2
        }
  }
};
</script>

