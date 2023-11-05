<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6392c5;
  margin-top: 60px;
}
button{
  background-color: rgb(96, 244, 214);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-color: rgb(196, 255, 232);
}
button:hover {
  box-shadow:rgb(196, 255, 232);
}
</style>