<template>
  <header>
    <img id="logo" src="../assets/FlightLab Logo.svg" alt="FlightLab">
    <nav>
      <h2>Program</h2>
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
}
header {
  display: flex;
  justify-content: space-between;
  img {
      margin: auto 20px;
      height: 80px;
    
  }
  nav {
    display: flex;
    place-items: center;
    justify-content: space-around;
    min-width: 40vw;
    h2 {
      min-width: auto;
      cursor: pointer;
      color: #2B3252;
      transition: .2s;
      &:hover {
        color: #EF5455;
        transition: .2s;
      }
    }
  }

}
</style>
