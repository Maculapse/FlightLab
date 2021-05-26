<template>
  <div id="app">
    <navigation class="navigation"></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  components: {
    navigation: Navigation
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

  .navigation {
    position: fixed;
    width: 100vw;
    z-index: 100;
  }

</style>
