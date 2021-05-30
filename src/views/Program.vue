<template>
<div class="page" ref="page">
    <div :class="computedClass">
      <img @click="scrollToTop()" src="../assets/right-arrow.svg">
      <p>Do góry</p>
    </div>
    <main>
      <section>
        <div class="left">
          <h1>Program FlightLab oferuje:</h1>
          <img @click="scrollTo('analysis')" src="../assets/lupa.svg">
          <h2>Tworzenie i analizowanie wykresów parametrów</h2>
          <img @click="scrollTo('visualization')" src="../assets/altitude.svg">
          <h2>Wizualizację instrumentów pokładowych</h2>
          <img @click="scrollTo('animation')" src="../assets/fighter.svg">
          <h2>Animację ruchu statku powietrznego</h2>
        </div>
        <div class="right">
          <img src="../assets/mainwindow@2x.png">
        </div>
      </section>
      <footer>
        <img @click="scrollTo('analysis')" src="../assets/right-arrow.svg">
      </footer>
      <div class="mate"></div>
    </main>
    <div class="subpage" ref="analysis" id="analysis">
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
        <figure ref="figures">
          <div @click="goLeft(1)" class="goLeft change">
            <img src="../assets/rightArrow2.svg">
          </div>
          <div @click="goRight(1)" class="goRight change">
            <img src="../assets/rightArrow2.svg">
          </div>
          <div class="slider" ref="slider">
            <div @mouseover="onHover(1)"
                  @mouseleave="onLeave(1)"
                  class="fig1 slide" ref="fig1">
              <img ref="img1" src="../assets/analizaustawienia.jpg">
            </div>
            <div @mouseover="onHover(2)"
                  @mouseleave="onLeave(2)"
                  class="fig2 slide" ref="fig2">
              <img ref="img2" src="../assets/podprogramanalizatabela.jpg">
            </div>
            <div @mouseover="onLast(true, 3)"
                  @mouseleave="onLast(false, 3)" 
                  class="fig3 slide" ref="fig3">
              <img ref="img3" src="../assets/podprogramanaliza.jpg">
            </div>
          </div>
        </figure>
      </section>
    </div>
    <div class="subpage" id="visualization" ref="visualization">
      <section>
        <div class="figure">
          <img src="../assets/wisualizationapp.jpg">
        </div>
        <div class="icon">
          <div class="icon-div">
            <img src="../assets/altitude.svg">
          </div>
          <h1>Wizualizacja instrumentów pokładowych</h1>
        </div>
        <div class="text">
          <p>Podstawowe instrumenty pokładowe dotyczące nawigacji, pilotażu i pracy zespołów napędowych, przedstawione są w module wizualizacji. Dzięki programowi FlightLab możesz przeprowadzić wizualizację tych instrumentów w formie animacji i zbadać co widział pilot w kokpicie podczas lotu.</p>
        </div>
      </section>
    </div>
    
    <div class="subpage" id="animation" ref="animation">
      <section>
        <div class="icon">
          <div class="icon-div">
            <img src="../assets/fighter.svg">
          </div>
          <h1>Animacja ruchu <br> statku powietrznego</h1>
        </div>
        <div class="text">
          <p>Dzięki pakietowi <i>Mapping Toolbox</i> oraz współpracy z symulatorem lotu <a href="https://www.flightgear.org/">FlightGear</a>, program umożliwia animację ruchu statku powietrznego na mapie 2D i 3D oraz ruch modelu w środowisku symulatora.</p>
        </div>
        <figure ref="figures-animation">
          <div @click="goLeft(2)" class="goLeft change">
            <img src="../assets/rightArrow2.svg">
          </div>

          <div @click="goRight(2)" class="goRight change">
            <img src="../assets/rightArrow2.svg">
          </div>

          <div class="slider" ref="sliderAnimation">
            <div @mouseover="onHover(4)"
                  @mouseleave="onLeave(4)"
                  class="fig4 slide" ref="fig4">
              <img ref="img4" src="../assets/map3D.jpg">
            </div>
            <div @mouseover="onHover(5)"
                  @mouseleave="onLeave(5)"
                  class="fig5 slide" ref="fig5">
              <img ref="img5" src="../assets/flightgear2.jpg">
            </div>
            <div @mouseover="onLast(true, 6)"
                  @mouseleave="onLast(false, 6)" 
                  class="fig6 slide" ref="fig6">
              <img ref="img6" src="../assets/flightgear1.jpg">
            </div>
          </div>
        </figure>
      </section>
    </div>

</div>
</template>

<script>
export default {
    data() {
      return {
        hover: false,
        isMobile: false,
        currentFig: 1,
        currentFig2: 4,
        scrollPosition: null
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    },
    created() {
      if (screen.width <= 1000) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    methods: {
      onHover(fig) {
        if (!this.isMobile) {
          let img1Height = this.$refs['img'+fig].clientHeight;
          this.$refs['fig'+fig].style.height = img1Height+'px';
        }
      },
      onLeave(fig) {
        if (!this.isMobile) {
          this.$refs['fig'+fig].style.height = '20%';
        }
      },
      onLast(state, fig) {
        if (!this.isMobile) {
          let figuresHeight = this.$refs.figures.clientHeight;
          let lastHeight = this.$refs['img'+fig].clientHeight;
          let move = figuresHeight-2*figuresHeight*0.2-lastHeight;
          if (state) {
            this.$refs['img'+fig].style.transform = `translateY(-${-move}px)`
          } else {
            this.$refs['img'+fig].style.transform = `translateY(0px)`
          }
        }
      },
      scrollTo(section) {
        this.$refs[section].scrollIntoView({behavior: "smooth"})
      },
      scrollToTop() {
        this.$refs['page'].scrollIntoView({behavior: "smooth"})
      },
      goLeft(section) {
        if (section==1) {
          this.currentFig--
          if (this.currentFig<1) {
            this.currentFig=3
          }
          this.$refs['fig'+this.currentFig].scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
        } else {
          this.currentFig2--
          if (this.currentFig2<4) {
            this.currentFig2=6
          }
          this.$refs['fig'+this.currentFig2].scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
        }
      },
      goRight(section) {
        if (section==1) {
          this.currentFig++
          if (this.currentFig>3) {
            this.currentFig=1
          }
          this.$refs['fig'+this.currentFig].scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
        } else {
          this.currentFig2++
          if (this.currentFig2>6) {
            this.currentFig2=4
          }
          this.$refs['fig'+this.currentFig2].scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
        }
      },
      updateScroll() {
        this.scrollPosition = window.scrollY;
        console.log(this.scrollPosition)
      }
    },
    computed: {
      computedClass() {
        let className = 'onTop';
          if (this.scrollPosition > 200) {
            className = 'onScroll';
          }
        return className;
      }
    }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.page {
    height: 400vh;

  .onScroll {
    position: fixed;
    bottom: 0;
    margin: 20px;
    z-index: 10;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transform: scale(0.8);
    cursor: pointer;
    transition: .2s;
    &:hover {
      transition: .2s;
      transform: scale(1);
    }
    img {
      transform: rotate(180deg);
    }
  }

  .onTop {
    position: fixed;
    bottom: 0;
    margin: 20px;
    z-index: 10;
    width: 100px;
    height: 100px;
    opacity: 0;
    transition: .2s;
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
          margin: 1.5rem;
        }

        h2 {
          width: 80%;
          text-align: left;
          font-size: 1.2rem;

        }

        img {
          height: 100px;
          cursor: pointer;
          transition: .2s;
          &:hover {
            transform: scale(1.1);
            transition: .2s;
          }
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

      img {
        transition: .2s;
        cursor: pointer;

        &:hover {
          transition: .2s;
          transform: scale(1.2);
        }
      }
    }
  }

  .subpage {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    section {
      min-height: 80vh;
      max-height: 80vh;
      width: 80vw;
      display: grid;
      grid-template-rows: 4fr 5fr;
      grid-template-columns: 2fr 3fr;
      grid-template-areas: 
        "icon figure"
        "text figure";
      row-gap: 5vh;
      column-gap: 2vw;

      figure {
        grid-area: figure;
        width: 100%;
        height: 100%;
        overflow: hidden;
        // border-radius: 41px;
        background: #ffffff;
        box-shadow:  34px 34px 61px #e0e0e0,
                    -34px -34px 61px #ffffff;

        .change {
          display: none;
        }
        .slider {
          width: 100%;
          height: 100%;
          .fig1 {
            position: static;
            width: 100%;
            height: 20%;
            transition: .5s;
            img {
              width: 100%;
            }
          }
          .fig2 {
            width: 100%;
            height: 30%;;
            -webkit-box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57); 
            box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57);          
            transition: .5s;
            img {
              -webkit-box-shadow: 0px -8px 33px 1px rgba(0,0,0,0.57); 
              box-shadow: 0px -8px 33px 1px rgba(0,0,0,0.57);
              width: 100%;
            }
          }
          .fig3 {
            width: 100%;
            height: 100%;
            transition: .5s;
            z-index: 100;
            img {
              transition: .5s;
              width: 100%;
              -webkit-box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57); 
              box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57);          
            }
          }

        }
      }

      .icon {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
          margin: 2rem;
          font-size: 1.2rem;
          line-height: 1.5rem;
          text-justify: inter-character;
          text-align: center;
        }
      }
    }
  }

  #visualization {
    section {
      grid-template-rows: 4fr 5fr;
      grid-template-columns: 4fr 2fr;
      grid-template-areas: 
        "figure icon"
        "figure text";
      .figure {
        grid-area: figure;
        display: grid;
        place-items: center;
        img {
          width: 100%;
          -webkit-box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.4); 
          box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.4);          
          transition: .5s;
        }
      }
    }
  }
  #animation {
    section {
      grid-template-rows: 4fr 5fr;
      grid-template-columns: 4fr 2fr;
      grid-template-areas: 
        "figure icon"
        "figure text";
      figure {
        grid-area: figure;
        width: 100%;
        height: 100%;
        overflow: hidden;
        // border-radius: 41px;
        background: #ffffff;
        box-shadow:  34px 34px 61px #e0e0e0,
                    -34px -34px 61px #ffffff;

        .fig4 {
          position: static;
          width: 100%;
          height: 20%;
          transition: .5s;
          img {
            width: 100%;
          }
        }
        .fig5 {
          width: 100%;
          height: 30%;;
          -webkit-box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57); 
          box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57);          
          transition: .5s;
          img {
            -webkit-box-shadow: 0px -8px 33px 1px rgba(0,0,0,0.57); 
            box-shadow: 0px -8px 33px 1px rgba(0,0,0,0.57);
            width: 100%;
          }
        }
        .fig6 {
          width: 100%;
          height: 100%;
          transition: .5s;
          img {
          transition: .5s;
            width: 100%;
            -webkit-box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57); 
            box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.57);          
          }
        }
      }
    }
  }

}

@media only screen and (max-width: 1000px) {

  .page {
    width: 100vw;
    height: auto;

    .upArrow {
      display: none;
    }

    main {
      width: 100%;
      height: auto;
      background-size: fill;
      background-position: 70% 0%;

      .mate {
        height: auto;
      }

      section {
        width: 90vw;
        height: auto;
        z-index: 10;
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 2rem;
        margin-top: 80px;

        .left {
          display: flex;
          flex-direction: column;
          place-items: center;
          grid-auto-rows: auto 1fr 1fr 1fr;
          grid-template-columns: 1fr 2fr;
          margin: 0 auto 5% auto;
          height: auto;

          h1 {
            font-size: 1.1rem;
          }
          h2 {
            font-size: 1rem;
            text-align: center;
            margin: 1rem;
          }
          img {
            height: 20vw;
          }
        }
        .right {
          img {
            width: 90vw;
            height: auto;
            margin: 2rem auto;
          }
        }
      }
      footer {
        display: none;
      }

    }

    .subpage {
      height: auto;
      min-height: auto;
      max-height: auto;
      display: flex;
      flex-direction: column;
      section {
        display: flex;
        flex-direction: column;
        max-height: 400vh;
        width: 90vw;
        .icon {
          margin-top: 1rem;
          .icon-div {
            img {
              margin: 1rem;
            }
          }
          h1 {
            margin: 1rem;
          }
        }
        .text {
          p {
            margin: 1rem;
            font-size: 1rem;
          }
        }
        figure {
          overflow: scroll;
          // min-height: auto;
          height: auto;
          margin-bottom: 1vh;
          position: relative;

          .change {
            position: absolute;
            height: 100%;
            width: 25vw;
            z-index: 101;
            display: grid;
            img {
              transform: scale(.3);
              width: 100%;
              height: 100%;
            }
          }
          .goRight { 
            right: 0;
            justify-content: end;
          }
          .goLeft {          
            justify-content: start;
            img {
              transform: rotate(180deg) scale(.3);
            }
          }

          .slider {
            overflow: scroll;
            width: auto;
            height: auto;
            display: flex;
            .slide, .fig1, .fig2, .fig3 {
              width: 90vw;
              height: auto;
              -webkit-box-shadow: 0px 0px 0px 0px; 
              box-shadow: 0px 0px 0px 0px;
              img {
                width: 90vw;
                height: 100%;
                -webkit-box-shadow: 0px 0px 0px 0px; 
                box-shadow: 0px 0px 0px 0px;
              }
            }
          }
        }

      }
    }


    #visualization {
      // display: none;
      section {
        // grid-template-rows: auto auto auto;
        // grid-template-columns: 1fr;
        // grid-template-areas: 
        //   "icon"
        //   "text"
        //   "figure";
        .icon {
          order: 1;

        }
        .text {
          order: 2;

        }
        .figure {
          order: 3;
          grid-area: figure;
          display: grid;
          place-items: center;
          img {
            width: 100%;
            -webkit-box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.4); 
            box-shadow: 0px -8px 20px 1px rgba(0,0,0,0.4);          
            transition: .5s;
          }
        }
      }
  }

    #animation {
      margin-bottom: 2rem;
      section {
        display: flex;
        flex-direction: column;
        max-height: 400vh;
        width: 90vw;
        .icon {
          margin-top: 1rem;
          .icon-div {
            img {
              margin: 1rem;
            }
          }
          h1 {
            margin: 1rem;
          }
        }
        .text {
          p {
            margin: 1rem;
            font-size: 1rem;
          }
        }
        figure {
          overflow: scroll;
          // min-height: auto;
          height: auto;
          margin-bottom: 1vh;
          position: relative;

          .change {
            position: absolute;
            height: 100%;
            width: 25vw;
            z-index: 101;
            display: grid;
            img {
              transform: scale(.3);
              width: 100%;
              height: 100%;
            }
          }
          .goRight { 
            right: 0;
            justify-content: end;
          }
          .goLeft {          
            justify-content: start;
            img {
              transform: rotate(180deg) scale(.3);
            }
          }

          .slider {
            overflow: scroll;
            width: auto;
            height: auto;
            display: flex;
            .slide, .fig1, .fig2, .fig3 {
              width: 90vw;
              height: auto;
              -webkit-box-shadow: 0px 0px 0px 0px; 
              box-shadow: 0px 0px 0px 0px;
              img {
                width: 90vw;
                height: 100%;
                -webkit-box-shadow: 0px 0px 0px 0px; 
                box-shadow: 0px 0px 0px 0px;
              }
            }
          }
        }
      }
    }
  }

}
</style>