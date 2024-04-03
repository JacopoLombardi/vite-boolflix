

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
    getApi(){
      axios.get(this.store.apiUrl, {
        params:{
          api_key: this.store.apiKey,
          query: this.store.filmUser
        }
      })
        .then(result => {
          this.storefilmUser = ''
          this.store.filmArray = result.data.results
        })
    }
  },

  mounted(){
    this.getApi()
  }
};
</script>



<!-- HTML -->
<template>

  <Header @searchFilm="getApi()" />

  <Main />

  <Footer />
  
</template>



<!-- CSS -->
<style lang="scss">

@use './assets/scss/main';

</style>