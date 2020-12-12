<template>
  <!-- Mads har lavet alt på denne side -->

  <div class="home">
    <mq-layout mq="mobile">
      <div class="background">
        <div class="videoAndOverlay">
          <div class="video-overlay"></div>
          <video autoplay muted loop id="myVideo">
            <source src="../assets/video/mobilversion.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="content">
          <div class="content2">
            <h2 class="headerFrontpage">Åbningstid i dag</h2>
            <div id="openingHour">
              <p>{{ dayOfWeek() }}</p>
            </div>
          </div>
          <div class="bookTime">
            <router-link to="/kontakt"
              ><button class="bookBtn">Book tid</button></router-link
            >

            <p>Få fikset din cykel indenfor 24 timer!</p>
          </div>

          <div class="brushStroke">
            <img src="../assets/brushStroke.svg" alt="" />
            <div class="overBrushStroke">
              <h3 class="headerBrushStroke">Nemt - Hurtigt - Billigt</h3>
              <h2 class="headlineBrushStroke">Professionel cykelreparation</h2>
              <p class="textBrushStroke">
                Uanset hvad din cykel fejler kan <br />
                X Cykel REP. hjælpe!
              </p>
            </div>
          </div>
          <img src="../assets/down.svg" alt="" />
        </div>
      </div>
    </mq-layout>

    <mq-layout mq="tablet+">
      <div class="background">
        <div class="videoAndOverlay">
          <div class="video-overlay"></div>
          <video autoplay muted loop id="myVideo">
            <source src="../assets/video/desktop.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="contentDesktop">
          <div class="content2Desk">
            <h2 class="headerFrontpage">Åbningstid i dag</h2>
            <div id="openingHour">
              <p>{{ dayOfWeek() }}</p>
            </div>

            <div class="bookTime">
              <router-link to="/kontakt"
                ><button class="bookBtn">Book tid</button></router-link
              >

              <p>Få fikset din cykel indenfor 24 timer!</p>
            </div>
          </div>

          <div class="brushStrokeDesk">
            <img src="../assets/brushStroke.svg" alt="brush stroke" />
            <div class="overBrushStroke">
              <h3 class="headerBrushStroke">Nemt - Hurtigt - Billigt</h3>
              <h2 class="headlineBrushStroke">Professionel cykelreparation</h2>
              <p class="textBrushStroke">
                Uanset hvad din cykel fejler kan <br />
                X Cykel REP. hjælpe!
              </p>
            </div>
          </div>
          <img class="downArrow" src="../assets/down.svg" alt="" />
        </div>
      </div>
    </mq-layout>

    <mq-layout mq="mobile">
      <div class="reviews">
        <Slider />
      </div>
    </mq-layout>

    <mq-layout mq="tablet+">
      <SliderDesk />
    </mq-layout>
    <mq-layout mq="mobile">
      <div class="facebook">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FXCYKELREP&tabs=timeline&width=280&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2672707899663290"
          width="280"
          height="500"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </mq-layout>

    <mq-layout mq="tablet+">
      <div class="facebookWrapper">
        <img src="../assets/cykelDesk.svg" alt="" />
        <div class="facebookDesk">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FXCYKELREP&tabs=timeline&width=280&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2672707899663290"
            width="280"
            height="500"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>
import Slider from "../components/slider.vue"; 
import SliderDesk from"../components/sliderDesk.vue"; 

export default { 
  components: { 
    Slider,
    SliderDesk 
    }, 
    methods: 
    { dayOfWeek() { 
      var d = new Date(); 
      var day = d.getDay();
  if (day === 6) { 
    return "Lukket i dag"; 
    } else if (day === 0) { 
      return "Lukket i dag"; 
    } else { 
      return "10 - 18"; } 
      }
    } 
  };
</script>

<style>
h2,
h3,
p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.background {
  position: relative;
  width: 100%;
  margin-bottom: 50px;
}

video {
  object-fit: fill;
  width: 100%;
  margin-top: 5px;
  z-index: -50;
}
.headerFrontpage {
  font-size: 32px;
  font-weight: 400;
}

#openingHour {
  font-size: 32px;
  color: #f2cb03;
  font-weight: 600;
}

.bookBtn {
  padding: 10px 20px 10px 20px;
  font-size: 24px;
  font-weight: 700;
  color: black;
  background-color: #f2cb03;
  border-radius: 30px;
  margin-bottom: 8px;
}

.headerBrushStroke {
  font-size: 16px;
  font-weight: 600;
}

.headlineBrushStroke {
  font-size: 22px;
  font-weight: 600;
  color: black;
}

.textBrushStroke {
  font-size: 16px;
  color: black;
}

.content {
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 95%;
  z-index: 2;
}

.contentDesktop {
  position: absolute;
  top: 5%;
  left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 95%;
  width: 80%;
  z-index: 2;
}

.content2Desk {
  width: 70%;
}
.content2Desk p {
  margin-bottom: 10px;
}

.home {
  margin-top: 75px;
  margin-bottom: 80px;
}

.brushStroke,
.brushStrokeDesk {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.brushStroke img {
  width: 100vw;
}

.brushStrokeDesk img {
  width: 90%;
}

.overBrushStroke {
  position: absolute;
}

.downArrow {
  position: absolute;
  bottom: 5%;
}

.reviews {
  margin-top: 50px;
  height: 300px;
  width: 100%;
  position: relative;
}

.facebookWrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
}

.facebookWrapper img {
  position: absolute;
  left: -20%;
  top: 20%;
  width: 90%;
}

.facebook {
  width: 90%;
  margin: auto;
  margin-top: 100px;
}

.facebookDesk {
  width: 90%;
  margin: auto;
  margin-left: 40%;
  margin-top: 100px;
}
</style>
