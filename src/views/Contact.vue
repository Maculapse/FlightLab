<template>
  <main>
    <section>
      <div class="side">
        <img src="../assets/letter.svg" alt="mail">
        <h1>Kontakt</h1>
        <p>W celach współpracy lub pytań odnośnie programu FlightLab zapraszam do kontaktu pod adresem:</p>
        <a href="mailto:kontakt@flightlab.pl">kontakt@flightlab.pl</a>
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
          height: 50vh;
          z-index: 10;
          display: grid;
          grid-template-columns: 2fr 3fr;
          column-gap: 2rem;

          .side {
            display: grid;
            place-items: center;
            grid-auto-rows: auto;
            grid-template-columns: 1fr;
            // margin: 20% auto;

            border-radius: 41px;
            background: linear-gradient(145deg, #d9e5f4, #b7c1cd);
            box-shadow:  34px 34px 61px #b3bcc9,
                        -34px -34px 61px #e3f0ff;
            
            img {
              width: 30%;
              margin: 2rem auto;
            }
            h1 {
              font-size: 2rem;
            }
            p {
              margin: auto 3rem;
              font-size: 1.3rem;
            }
            a {
              margin: 2rem auto;
              font-size: 1.5rem;
              &:hover {
                color: $secondary;
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
      height: auto;
      z-index: 10;
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;

      .side {
        display: grid;
        place-items: center;
        grid-auto-rows: auto;
        grid-template-columns: 1fr;
        border-radius: 41px;
        background: linear-gradient(145deg, #d9e5f4, #b7c1cd);
        box-shadow:  34px 34px 61px #b3bcc9,
                    -34px -34px 61px #e3f0ff;
        
        img {
          width: 30%;
          margin: 2rem auto;
        }
        h1 {
          font-size: 1.5rem;
        }
        p {
          margin: 1rem 1rem;
          font-size: 1rem;
        }
        a {
          margin: 1rem auto 2rem;
          font-size: 1.5rem;
          &:hover {
            color: $secondary;
          }
        }
      }
    }
}


}
</style>