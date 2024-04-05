

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
    // chiamata API film/serie Popolari
    getApiPopular(apiPopular){
      axios.get(apiPopular, {
        params:{
          api_key: store.apiKey,
        }
      })
        .then(result => {
          
          if(apiPopular === store.apiUrlPopularFilm){
            store.popularFilmArray = result.data.results
          }else{
            store.popularSerieArray = result.data.results
          }
        })

    },
    // chiamata API film/serie cercate dall'utente
    getApi(apiUrl){
      axios.get(apiUrl, {
        params:{
          api_key: store.apiKey,
          query: store.filmUser
        }
      })
        .then(result => {
          store.filmUser = ''
          
          if(apiUrl === store.apiUrlFilm){
            store.filmArray = result.data.results
          }else{
            store.serieArray = result.data.results
          }

        })
    }
  },

  mounted(){
    this.getApiPopular(store.apiUrlPopularFilm)
    this.getApiPopular(store.apiUrlPopularSerie)
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