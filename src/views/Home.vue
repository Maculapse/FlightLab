<template>
  <main>
    <section>
      <div class="mainblock">
        <h2>
          Program do analizy i wizualizacji danych z 
          pokładowego rejestratora parametrów lotu oparty 
          na środowisku <a href="https://www.mathworks.com/products/matlab.html">MATLAB</a>.
        </h2>
        <div class="more">
          <router-link to="/program">Dowiedz się więcej...</router-link>          
        </div>
        <img src="../assets/mainwindow.jpg" alt="">
      </div>     
    </section>
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
    place-items: center left;

    section {
      width: 40vw;
      height: 60%;
      margin-left: 10vw;


      .mainblock {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        // margin: auto 10%;

        h2 {
          margin: 1rem 2rem;
        }
        img {
          width: auto;
          height: auto;
          // transition: .3s;
          // &:hover {
          //   animation: scale 200ms ease-in-out forwards;
          //   -webkit-box-shadow: 10px 9px 26px -5px rgba(0,0,0,0.75);
          //   -moz-box-shadow: 10px 9px 26px -5px rgba(0,0,0,0.75);
          //   box-shadow: 10px 9px 26px -5px rgba(0,0,0,0.75);
          // }
          // // animation: scale 200ms reverse;
          // @keyframes scale {
          //   to {
          //     transform: scale(1.05);
          //   }
          // }
        }

        a {
          color: #EF5455;
          text-decoration: none;
          transition: .2s;
          &:hover {
            color: #FFF;
            transition: .2s;
          }
        }

        .more {
          font-size: 1.2rem;
          margin: 1rem;
        }
      }

    }
  }

@media only screen and (max-width: 1000px) {

  main {
    height: 100vh;
    width: 100vw;
    background-image: url('../assets/backgroundF16.png');
    background-repeat: no-repeat;
    background-size: fill;
    background-position: 70% 0%;
    margin: 0;
    padding: 0;

    display: flex;

    section {
      width: 100%;
      height: auto;
      margin: 0;

      .mainblock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        vertical-align: middle;
        position: absolute;
        width: 100%;
        height: auto;
        margin: 0;
        // margin-top: 60px;
        bottom: 1rem;


        h2 {
          margin: 1rem 2rem;
          font-size: 1rem;
        }
        img {
          width: 90%;
          margin: auto;
          height: auto;

        }

        a {
          color: #EF5455;
          text-decoration: none;
          transition: .2s;
          &:hover {
            color: #FFF;
            transition: .2s;
          }
        }

        .more {
          font-size: 1.1rem;
          margin: 1rem;
        }
      }

    }
  }


}

</style>
