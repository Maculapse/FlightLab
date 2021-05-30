<template>
  <div class="menu" v-click-outside="exitMenu" >
      <div @click="toggleMenu"  class="menu-button" :class="{menuActive: menu}">
        <div class="buttons-group" :class="{menuButtonActive: menu}">
          <button @click="onProgram"><p>Program</p></button>
          <button @click="onKontakt"><p>Kontakt</p></button>
          <button @click="onAutor"><p>Autor</p></button>
        </div>
      </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {
    toggleMenu() {
      if (this.menu===false) {
        this.menu=true;
      } else {
        this.menu=false;
      }
    },
    exitMenu() {
      this.menu = false;
    },
    onProgram() {
      if (this.menu===true) {
        this.$router.push('/program');
      }
    },
    onKontakt() {
      if (this.menu===true) {
        this.$router.push('/kontakt');
      }
    },
    onAutor() {
      if (this.menu===true) {
        this.$router.push('/autor');
      }
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">

.menu {
      .menu-button {
        width: 20vw;
        height: 20vw;
        z-index: 200;
        border-radius: 50%;
        background: $secondary;
        position: fixed;
        bottom: 0;
        margin: 5vw;
        -webkit-box-shadow: 4px 4px 10px rgba($color: #000000, $alpha: .4);
        display: grid;
        place-items: center;
        transition: .5s;
        img {
          width: 12vw;
        }
      }
      .menuActive {
        width: 90vw;
        height: 80vw;
        border-radius: 4vw;
      }
      .buttons-group {
        display: grid;
        gap: 5px;
        transition: .5s;
        button {
          transition: .5s;
          outline: none;
          background: white;
          border: none;
          border-radius: 5vw;
          width: 13vw;
          height: 2vw;
          p {
            transition: .2s;
            opacity: 0;
            font-size: 10px;
            font-family: 'montserrat';
            color: $primary;
          }
        }
      }
      .menuButtonActive {
        transition: .5s;
        gap: 4vw;
        button {
          transition: .5s;
          width: 70vw;
          height: 13vw;
          p {
            opacity: 1;
            font-size: 24px;
            transition: .8s;
          }
        }
      }
    }


</style>