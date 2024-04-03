

<!-- Javascript -->
<script>
import Card from './partials/Card.vue'

import {store} from '../data/store'

export default {
  components:{
    Card
  },

  data(){
    return{
      store
    };
  },
};
</script>



<!-- HTML -->
<template>
  <section class="container  d-flex  flex-wrap">

    <Card 
      v-for="item in this.store.filmArray"
      :key="item.id"
      :title="item.title"
      :originalTitle="item.original_title"
      :language="item.original_language"
      :vote="item.vote_average"
    />
    
  </section>
</template>



<!-- CSS -->
<style lang="scss" scoped>



</style>