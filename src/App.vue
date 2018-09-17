<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    console.log(window.screen.width / 1920 * 100 + "px")
    document.documentElement.style.fontSize = window.screen.width / 1920 * 100 + "px";
  }
}
</script>

<style>
*{padding: 0;margin: 0;}
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* background: #0A0C22; */
    /* overflow: hidden; */
}
</style>
