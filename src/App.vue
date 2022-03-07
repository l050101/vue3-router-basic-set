<template>
  <div id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/about"> About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>
  body{
    margin: 0;
  }
  #nav{
    text-align: center;
  }
</style>
