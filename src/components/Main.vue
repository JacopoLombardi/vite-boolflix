

<!-- Javascript -->
<script>
import Card from './partials/Card.vue'

import {store} from '../data/store'

export default {
  components:{
    Card
  },

  props:{
    type: String
  },

  data(){
    return{
      
    };
  },

  methods:{
    arrayToCicle(){
      return this.type === 'film' ? store.filmArray : store.serieArray
    }
  },

  computed:{
    title(){
      return this.type === 'film' ? 'Film' : 'Serie TV'
    }
  },
  
};
</script>



<!-- HTML -->
<template>

  <h2 class="text-center  mt-5">{{ title }}</h2>
  <h4
    v-if="arrayToCicle().length === 0"
    class="text-center  text-danger">
    Non ho trovato nessun elemento corrispondente
  </h4>

  <section class="container  d-flex  flex-wrap">

    <Card 
      v-for="item in arrayToCicle()"
      :key="item.id"
      :filmAndSerieObject="item"
    />

  </section>
</template>



<!-- CSS -->
<style lang="scss" scoped>



</style>