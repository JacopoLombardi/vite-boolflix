

<!-- Javascript -->
<script>
import {store} from '../data/store'

export default {
  data(){
    return{
      store,
      filmUser: '',
      clicked: false
    };
  },

  methods:{
    searchFilm(){
      this.store.filmUser = this.filmUser
      this.$emit('searchFilm')
    },

    homePage(){
      this.filmUser = ''
      this.store.filmArray = []
      this.store.serieArray = []
      this.$emit('homePage')
    }
  }
};
</script>



<!-- HTML -->
<template>

  <section class="d-flex  text-white">
    <div class="d-flex  justify-content-between  align-items-center  w-100">
      <h1
        @click="homePage()"
        class="d-inline-block  fw-bold  ms-5">
        Boolflix
      </h1>

      <div class="_box_input  d-flex  flex-column  align-items-end  me-5  w-25  h-75">
        <h5 class="">Search</h5>

        <div class="d-flex  align-items-center">

          <transition>
            <div
              v-if="clicked === true"
              class="d-flex  flex-row">

                <input
                  v-model="filmUser"
                  @keyup.enter="searchFilm()"
                  class="form-control"
                  type="text"
                  placeholder="name film"
                >
              
                <button
                  @click="searchFilm()"
                  class="btn  fw-semibold  rounded-3  ms-3">
                  Find
                </button>
            
            </div>
          </transition>

          <i
            @click="clicked = !clicked"
            class="fs-3  fa-solid fa-magnifying-glass  ms-5  py-2">
          </i>
        </div>

      </div>

    </div>
  </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>

section{
  height: 140px;
  background-color: rgb(13, 13, 13);
  h1{
    font-size: 55px;
    color: red;
    cursor: pointer;
    &:hover{
      transition: all 0.5s ease;
      color: rgb(209, 4, 4);
    }
  }
  i{
    cursor: pointer;
    &:hover{
      transition: all 0.5s ease;
      color: rgb(208, 208, 208);
    }
  }
  ._box_input{
    width: 350px;
    input{
      width: 300px;
    }
    button{
      background-color: rgb(72, 72, 72);
      color: white;
    }
  }
}


// transition tramite il TAG <transition>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>