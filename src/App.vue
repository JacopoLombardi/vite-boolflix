

<!-- Javascript -->
<script>

// import componenti
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

import {store} from './data/store'

export default {
  components:{
    Header,
    Main,
    Footer
  },

  data(){
    return{
      store
    };
  },

  methods:{
    getApi(apiUrl){
      axios.get(apiUrl, {
        params:{
          api_key: store.apiKey,
          query: 'matrix' //store.filmUser
        }
      })
        .then(result => {
          store.filmUser = ''
          // store.filmArray = result.data.results
          console.log(result.data.results)
          
          if(apiUrl === store.apiUrlFilm){
            store.filmArray = result.data.results
          }else{
            store.serieArray = result.data.results
          }

        })
      console.log(store.filmArray)
      console.log(store.serieArray)
    }
  },

  mounted(){
    this.getApi(store.apiUrlFilm)
    this.getApi(store.apiUrlSerie)
    
  }
};
</script>



<!-- HTML -->
<template>

  <Header 
  @searchFilm=" getApi(this.store.apiUrlFilm), 
                getApi(this.store.apiUrlSerie)" />

  <Main type="film" />

  <Main type="serie" />

  <Footer />
  
</template>



<!-- CSS -->
<style lang="scss">

@use './assets/scss/main';

</style>