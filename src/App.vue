<template>
  <v-app>
    <Nav-Component/>
    <router-view></router-view>
    <Footer-Component></Footer-Component>
  </v-app>
</template>

<script setup>
  import NavComponent from './components/Util/NavComponent.vue'
  import FooterComponent from './components/Util/FooterComponent.vue'
</script>

<style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;1,100&display=swap');
  
  

</style>