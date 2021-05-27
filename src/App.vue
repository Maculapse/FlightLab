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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
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

  a {
    text-decoration: none;
    color: #2B3252;
    // color: inherit;
  }
  .router-link-active {
     color: #EF5455;
  }

</style>
