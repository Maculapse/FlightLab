<template>
  <main>
    <blockquote>
      <p>Program do analizy i wizualizacji danych z 
        pokładowego rejestratora parametrów lotu oparty 
        na środowisku MATLAB.
      </p>
    </blockquote>
  </main>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
  main {
    height: 100vh;
    background-image: url('../assets/backgroundF16.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;

    display: grid;
    place-items: center;

    blockquote {
      width: 20vw;
      height: 10vh;
      font-size: 2rem;
    }
  }
</style>
