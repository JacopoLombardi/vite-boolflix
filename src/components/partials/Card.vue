

<!-- Javascript -->
<script>
import {store} from '../../data/store'

export default {
   props:{
      title: String,
      originalTitle: String,
      language: String,
      vote: Number
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

   <div class="bg-light  border  mt-5 p-3 mx-3">

      <p>titolo: {{ title }}</p>
      <p>titolo originale: {{ originalTitle }}</p>
      <p>lingua: {{ language }}</p>
      <p>voto: {{ vote }}</p>

   </div>
  
</template>



<!-- CSS -->
<style lang="scss" scoped>

div{
  width: 400px;
  height: 400px;
}

</style>