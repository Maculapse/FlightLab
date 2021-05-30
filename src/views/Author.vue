<template>
  <main>
    <section>
      <div class="side">
        <div class="avatar">
          <img src="../assets/sierzant_bialetlo.png">
        </div>
        <h1>inż. Maksymilian Trzeciak</h1>
        <p>Jestem inżynierem lotnictwa, studentem V roku kierunku
            mechatronicznego. Samodzielnie kształcę się z zakresu tworzenia
            progresywnych aplikacji webowych. Realizowałem projekty
            w postaci pełnowymiarowych aplikacji (front-end i back-end),
            wykorzystując m.in. takie technologie jak: <b>JavaScript, Vue.js, Node.Js,
            Express.js, MongoDB</b> oraz <b>GIT</b>. Komercyjnie rozwijałem aplikację
            <a href="https://neterty.pl/">neterty.pl</a> , zajmując się wszystkimi aspektami technicznymi.
            Dodatkowo zajmuję się grafiką internetową w programach pakietu
            Adobe (<b>Photoshop, Illustrator, XD</b>) oraz fotografią i montażem
            filmów. W ramach pracy inżynierskiej i magisterskiej utworzyłem
            programy komputerowe do obliczeń silników lotniczych
            oraz do analizy danych z pokładowych rejestratorów parametrów
            lotu.</p>
        <p id="linki">Linki:</p>
        <div class="link">
          <a href="https://github.com/Maculapse">
            <img src="../assets/github.png" alt="github">
            <p>Github</p>
          </a>
          <a href="https://neterty.pl/">
            <img src="../assets/NetertyBlackSVG.svg" alt="github">
            <p>Neterty</p> 
          </a>
        </div>

      </div>
    </section>
    <div class="mate"></div>
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
      height: auto;
      min-height: 100vh;
      background-image: url('../assets/backgroundF16.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      margin: 0;
      padding: 0;
      display: grid;
      place-items: center;
      user-select: none;

      .mate {
        position: fixed;
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
          height: auto;
          z-index: 10;
          display: grid;
          grid-template-columns: 4fr 3fr;
          column-gap: 2rem;

          .side {
            display: grid;
            place-items: center;
            grid-auto-rows: auto;
            grid-template-columns: 1fr;
            margin: 10vh auto;

            border-radius: 41px;
            background: linear-gradient(145deg, #d9e5f4, #b7c1cd);
            box-shadow:  34px 34px 61px #b3bcc9,
                        -34px -34px 61px #e3f0ff;
            .avatar {
              width: 10vw;
              height: 10vw;
              border-radius: 50%;
              overflow: hidden;
              margin: 2rem;
              img {
                width: 100%;
              }
            }
            h1 {
              font-size: 2rem;
              margin: auto auto 1rem;
            }
            p {
              margin: auto 3rem;
              font-size: 1.1rem;
              line-height: 1.5rem;
              text-align: left;
              text-justify: inter-character;
              font-weight: 500;
              a {
                color: $secondary;
              }
            }
            .link {
              height: 10vh;
              margin: 2rem;
              display: flex;
              width: 80%;
              justify-content: space-evenly;
              // align-content: middle;
              img {
                height: 100%;
                transition: .2s;
                &:hover {
                  transform: scale(1.2);
                  transition: .2s;
                }
              }
              a {
                display: flex;
                place-items: center;
                width: 100%;
                margin: 1rem 1rem;
                font-size: 1.5rem;
                text-align: left;
                &:hover {
                  color: $secondary;
                }
                p {
                  font-size: 1.5rem;
                }
              }

            }
          }
        }
    }


@media only screen and (max-width: 1000px) {
main {
      height: auto;
      min-height: 100vh;
      background-image: url('../assets/backgroundF16.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      background-position: 70% 0%;
      margin: 0;
      padding: 0;
      display: grid;
      place-items: center;
      user-select: none;

      .mate {
        position: fixed;
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
          height: auto;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr;
          opacity: 0.9;

          .side {
            display: grid;
            place-items: center;
            width: 90vw;
            grid-auto-rows: auto;
            grid-template-columns: 1fr;
            margin: 15vh auto;

            border-radius: 41px;
            background: linear-gradient(145deg, #d9e5f4, #b7c1cd);
            box-shadow:  34px 34px 61px #b3bcc9,
                        -34px -34px 61px #e3f0ff;
            .avatar {
              width: 40vw;
              height: 40vw;
              border-radius: 50%;
              overflow: hidden;
              margin: 2rem;
              img {
                width: 100%;
              }
            }
            h1 {
              font-size: 2rem;
              margin: auto auto 2.5rem;
            }
            p {
              margin: auto 1rem;
              font-size: 1.1rem;
              line-height: 1.5rem;
              text-align: none;
              text-justify: inter-character;
              font-weight: 500;
            }
            #linki {
              margin: 1rem;
            }
            .link {
              height: 15vh;
              margin-bottom: 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              img {
                width: 50px;
                transition: .2s;
                &:hover {
                  transform: scale(1.2);
                  transition: .2s;
                }
              }
              a {
                display: flex;
                height: 100%;
                width: auto;
                place-items: center;
                margin: 1rem;
                font-size: 1.5rem;
                text-align: left;
                &:hover {
                  color: $secondary;
                }
                p {
                  font-size: 1.5rem;
                }
              }

            }
          }
        }
    }
}
</style>