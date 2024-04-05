

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
      numFrom1To5: '',

      overed: false
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

   <div class="_card_container  d-flex  m-2">

      <!-- copertina -->
      <div 
         @mouseover="overed = true"
         @mouseleave="overed = false"  
         class="_card  ">
         <div class="text-center">
            <img
               class="_thumbnail  position-relative z-1"
               :src="thumbnail()"
               alt=""
            >
         </div>
         

         <div
           :class="{'z-2': overed === true}"
           class="_info  d-flex  flex-column  justify-content-between  align-items-center  text-center  text-white  position-relative  fs-5  fw-bold  h-100"
           >
            <!-- titoli -->
            <div class="mt-5">
               <p>Title: {{ filmAndSerieObject.title || filmAndSerieObject.name }}</p>
               <p>Original Title: {{ filmAndSerieObject.original_title || filmAndSerieObject.original_name }}</p>
            </div>

            <!-- descrizione -->
            <div class="_box_description  mt-2  fw-semibold">
               <p class="_description">{{ filmAndSerieObject.overview }}</p>
            </div>

            <!-- bandiera -->
            <div class="mb-2">
               <img
                  class="img_flag  mt-4"
                  :src="languageFlag()"
                  :alt="filmAndSerieObject.original_language"
               >

               <!-- stelline -->
               <ul class="d-flex  p-0  mt-4">
                  <li>
                     <i
                        v-for="item in starsVote()"
                        :key="item.id"
                        class="fa-solid fa-star">
                     </i>
                  </li>
                  <li> 
                     <i 
                        v-for="item in (5 - starsVote())"
                        :key="item.id"
                        class="fa-regular fa-star">
                     </i>
                  </li>
               </ul>
            </div>

         </div>

      </div>
   </div>
  
</template>



<!-- CSS -->
<style lang="scss" scoped>

._card_container{
   width: 350px;
   height: 525px;
   ._thumbnail{
      width: 100%;
      height: 525px;
   }
   ._info{
      padding: 0 40px;
      bottom: 525px;
      background-color: rgba(0, 0, 0, 0.671);
      ._box_description{
         font-size: 16px;
         overflow: auto;
      }
      .img_flag{
         width: 35px;
         height: 25px;
      }
   }
}


</style>