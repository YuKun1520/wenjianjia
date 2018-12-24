<template>
  <div id="app" v-cloak>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
[v-cloak]{
  display: none
}
body{
  margin:0;
  padding:0;
}
a{
  text-decoration: none
}
ul,ol{
  list-style: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
