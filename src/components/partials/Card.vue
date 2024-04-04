

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
      flagIt: '../../../public/img/it.png',

      numFrom1To10: '',
      numFrom1To5: ''
    };
  },

  methods:{

   thumbnail(){
      if(this.filmAndSerieObject.poster_path){
         return 'https://image.tmdb.org/t/p/w300' + this.filmAndSerieObject.poster_path
      }else{
         return 'https://www.huber-online.com/daisy_website_files/_processed_/8/0/csm_no-image_d5c4ab1322.jpg'
      }
   },


   languageFlag(){
      this.chooseFlag = this.filmAndSerieObject.original_language

      if(this.chooseFlag === 'en'){
         return this.flagEn
      }else if(this.chooseFlag === 'it'){
         return this.flagIt
      }
   },


   starsVote(){
      this.numFrom1To10 = this.filmAndSerieObject.vote_average
      this.numFrom1To5 = Math.ceil(this.numFrom1To10 / 2)
      return this.numFrom1To5
   },

  }

};
</script>



<!-- HTML -->
<template>

   <div class="_card_container  bg-light  border  mt-5 p-2">

      <div class="text-center">
         <img
            class="_thumbnail"
            :src="thumbnail()"
            alt=""
         >
      </div>
      

      <div class="_info">
         <p>titolo: {{ filmAndSerieObject.title || filmAndSerieObject.name }}</p>
         <p>titolo originale: {{ filmAndSerieObject.original_title || filmAndSerieObject.original_name }}</p>
         <img
            class="img_flag"
            :src="languageFlag()"
            :alt="filmAndSerieObject.original_language"
         >
         <p>voto: {{ starsVote() }}</p>

         <ul class="d-flex  p-0">
            <li>
               <i
                  v-for="item in starsVote()"
                  :key="item.id"
                  class="fa-solid fa-star">
               </i>
            </li>
            <li>
               <i 
                  v-for="item in 5 - starsVote()"
                  :key="item.id"
                  class="fa-regular fa-star">
               </i>
            </li>

         </ul>


      </div>
   </div>
  
</template>



<!-- CSS -->
<style lang="scss" scoped>

._card_container{
  width: 400px;
  height: 700px;
  ._thumbnail{
     object-fit: cover;
  }
  ._info{
   padding: 0 40px;
   .img_flag{
      width: 35px;
      height: 25px;
   }
  }
}


</style>