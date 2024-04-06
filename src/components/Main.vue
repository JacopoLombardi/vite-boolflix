

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
      if(store.filmArray.length === 0 && this.type === 'film'){
        return store.popularFilmArray
      }
      else if(store.serieArray.length === 0 && this.type === 'serie'){
        return store.popularSerieArray
      }
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

  <h2
    :class="{'mt-7': type === 'serie'}"
    class="text-center  text-white">
    {{ title }}
    </h2>
  <h4
    v-if="arrayToCicle().length === 0"
    class="text-center  text-danger">
    Non ho trovato nessun elemento corrispondente
  </h4>


    <div class="_container container-fluid  d-flex  flex-wrap  justify-content-center">
      <Card 
        v-for="item in arrayToCicle()"
        :key="item.id"
        :filmAndSerieObject="item"
      />
    </div>

</template>



<!-- CSS -->
<style lang="scss" scoped>

h2{
  font-size: 50px;
  margin-bottom: 20px;
}

</style>