<template>
<div class="page">
    <main>
      <section>
        <div class="left">
          <h1>Program FlightLab oferuje:</h1>
          <img src="../assets/lupa.svg">
          <h2>Tworzenie i analizowanie wykresów parametrów</h2>
          <img src="../assets/altitude.svg">
          <h2>Wizualizację instrumentów pokładowych</h2>
          <img src="../assets/fighter.svg">
          <h2>Animację ruchu statku powietrznego</h2>
        </div>
        <div class="right">
          <img src="../assets/mainwindow@2x.png">
        </div>
      </section>
      <footer>
        <img src="../assets/right-arrow.svg" alt="">
      </footer>
      <div class="mate"></div>
    </main>
      <div class="analysis">
        <section>
          <div class="icon">
            <div class="icon-div">
              <img src="../assets/lupa.svg">
            </div>
            <h1>Analiza wykresów</h1>
          </div>
          <div class="text">
            <p>Program FlightLab pozawala na zarządzanie plikami z zapisami przebiegu parametrów rejestrowanych na pokładzie różnych statków powietrznych. Dzięki narzędziu do dokładnej analizy, możesz tworzyć zestaw wykresów, a następnie analizować wybrane fragmenty lotu korzystając z interaktywnego kursora. Program umożliwia wczytanie dowolnej ilości zarówno parametrów analogowych, jak i dyskretnych.</p>
          </div>
          <figure>
            <!-- <img src="../assets/podprogramanaliza.PNG" alt=""> -->
          </figure>
        </section>
      </div>
</div>
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

.page {
    height: 200vh;
  main {
    height: 100vh;
    background-image: url('../assets/backgroundF16.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;

    .mate {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #FFF;
      opacity: .4;
      z-index: 0;
    }

    section {
      width: 90vw;
      min-height: 80vh;
      // margin-top: 10vh;
      z-index: 10;
      display: grid;
      grid-template-columns: 2fr 3fr;
      column-gap: 2rem;

      .left {
        display: grid;
        place-items: center;
        grid-auto-rows: auto 1fr 1fr 1fr;
        grid-template-columns: 1fr 2fr;
        margin: 20% auto;
        height: 60vh;

        border-radius: 41px;
        background: linear-gradient(145deg, #d9e5f4, #b7c1cd);
        box-shadow:  34px 34px 61px #b3bcc9,
                    -34px -34px 61px #e3f0ff;

        h1 {
          grid-column: 1 / span 2;
          font-size: 1.8rem;
          margin: 1rem;
        }

        h2 {
          width: 80%;
          text-align: left;
          font-size: 1.2rem;

        }

        img {
          height: 100px;
        }
      }


      .right {
        display: grid;
        place-items: center;
        img {
          width: 100%;
          height: 60vh;
        }
      }
    }
    footer {
      position: absolute;
      bottom: 2vh;
      width: 100%;
      z-index: 10;
    }
  }

  .analysis {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    section {
      min-height: 80vh;
      width: 80vw;
      display: grid;
      grid-template-rows: 4fr 5fr;
      grid-template-columns: 2fr 3fr;
      grid-template-areas: 
        "icon figure"
        "text figure";
      row-gap: 10%;
      column-gap: 5%;

      figure {
        grid-area: figure;
        // background: #222;
      }

      .icon {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        // grid-template-rows: 2fr 1fr;
        // place-items: center;
        border-radius: 41px;
        background: #ffffff;
        box-shadow:  34px 34px 61px #e0e0e0,
                    -34px -34px 61px #ffffff;
        .icon-div {
          height: 50%;
          img {
            height: 100%;
          }
        }
      }

      .text {
        display: grid;
        place-items: center;
        border-radius: 41px;
        background: #ffffff;
        box-shadow:  34px 34px 61px #e0e0e0,
                    -34px -34px 61px #ffffff;
        p {
          margin: 4rem;
          font-size: 1.2rem;
          line-height: 1.5rem;
        }
      }

    }

  }

}
</style>