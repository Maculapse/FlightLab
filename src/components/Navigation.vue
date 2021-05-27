<template>
  <header>
    <router-link to="/">
      <img id="logo" src="../assets/FlightLab Logo.svg" alt="FlightLab">
    </router-link>
    <nav>
      <h2>
        <router-link to="/program">Program</router-link>
      </h2>
      
      <h2>Kontakt</h2>
      <h2>Autor</h2>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
*  {
  margin: 0;
  padding: 0;

  a {  
    text-decoration: none;
    transition: .2s;
    &:hover {
      transition: .2s;
    }       
  }
}
header {
  display: flex;
  justify-content: space-between;
  // background-color: #FFF;
  // box-shadow: 0 0 5px 10px rgba(158, 158, 158, 0.274);

  img {
      margin: auto 20px;
      height: 80px;
    
  }
  .router-link-active {
      // color: #EF5455;
    }
  nav {
    display: flex;
    place-items: center;
    justify-content: space-around;
    min-width: 40vw;
    h2 {
      min-width: auto;
      cursor: pointer;
      // color: #2B3252;
      transition: .2s;
      &:hover {
        // color: #EF5455;
        transition: .2s;
      }
      &:after {
          content: "";
          position: relative;
          right: 0;
          top: 10%;
          left: 50%;
          bottom: -5px;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);

          display: block;
          width: 0;
          height: 2px;
          
          background-color: #EF5455;
          transition: 0.5s width ease;
        }
          &:hover::after {
            width: 100%;
          }
    }
  }

}
</style>
