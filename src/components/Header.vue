

<!-- Javascript -->
<script>
import {store} from '../data/store'

export default {
  data(){
    return{
      store,
      filmUser: ''
    };
  },

  methods:{
    searchFilm(){
      this.store.filmUser = this.filmUser
      this.$emit('searchFilm')
    }
  }
};
</script>



<!-- HTML -->
<template>

  <section class="d-flex  bg-light">
    <div class="d-flex  justify-content-between  align-items-center  w-100">
      <h1 class="d-inline-block  fw-bold  ms-5">Boolflix</h1>

      <div class="_box_input  me-5">
        <h5>Search</h5>
        <input
          v-model="filmUser"
          class="form-control  w-75"
          type="text"
          placeholder="name film"
        >
        <button
          @click="searchFilm()"
          class="btn  btn-primary  rounded-3  mt-2">
          Find
        </button>
      </div>

    </div>
  </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>

section{
  height: 140px;
  h1{
    font-size: 55px;
  }
  ._box_input{
    width: 350px;
    input{
      height: 40px;
    }
  }
}


</style>