<template>
  <div id="app">
    <navigation :class="computedClass"></navigation>
    <mobileNavigation class="mobileNavigation"></mobileNavigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import MobileNavigation from './components/Mobile-Navigation';

export default {
  data() {
    return {
      isMobile: false,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition)
    }
  },
  components: {
    navigation: Navigation,
    mobileNavigation: MobileNavigation
  },
  computed: {
    computedClass() {
      let className = 'top';
        if (this.scrollPosition > 45) {
          className = 'scroll';
        }
        console.log(className)
      return className;
    }
  },
  created() {
    if (screen.width <= 1000) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
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

  .top {
    position: fixed;
    width: 100vw;
    z-index: 100;
    transition: .5s;
  }

  .scroll {
    position: fixed;
    width: 100vw;
    z-index: 100;
    background-color: #FFF;
    transition: .5s;
    -webkit-box-shadow: 0px 4px 14px -5px rgba(0,0,0,0.5); 
    box-shadow: 0px 4px 14px -5px rgba(0,0,0,0.5);
  }
}



  a {
    text-decoration: none;
    color: #2B3252;
    // color: inherit;
  }
  .router-link-active {
    color: #EF5455;
  }
  .mobileNavigation {
    display: none;
  }
@media only screen and (max-width: 1000px) {
  .mobileNavigation {
    display: block;
  }
}
</style>
