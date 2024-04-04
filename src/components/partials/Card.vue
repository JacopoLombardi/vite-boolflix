

<!-- Javascript -->
<script>
// import {store} from '../../data/store'

export default {
   props:{
      filmAndSerieObject: Object
   },

  data(){
    return{
      // store
      chooseFlag: '',
      flagEn: '../../../public/img/en.png',
      flagIt: '../../../public/img/it.png'
    };
  },

  methods:{

   languageFlag(){
      this.chooseFlag = this.filmAndSerieObject.original_language

      if(this.chooseFlag === 'en'){
         return this.flagEn
      }else if(this.chooseFlag === 'it'){
         return this.flagIt
      }
   }


  }

};
</script>



<!-- HTML -->
<template>

   <div class="bg-light  border  mt-5 p-3 mx-3">

      <p>titolo: {{ filmAndSerieObject.title || filmAndSerieObject.name }}</p>
      <p>titolo originale: {{ filmAndSerieObject.original_title || filmAndSerieObject.original_name }}</p>
      <p>lingua: {{ filmAndSerieObject.original_language }}</p>
      <img :src="languageFlag()" alt="">
      <p>voto: {{ filmAndSerieObject.vote_average }}</p>
   </div>
  
</template>



<!-- CSS -->
<style lang="scss" scoped>

div{
  width: 400px;
  height: 400px;
}

</style>