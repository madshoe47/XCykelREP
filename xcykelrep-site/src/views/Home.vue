<template>
  <div class="home">
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
            <p v-if="dayOfWeek == 0 || 6">Lukket i dag</p>
            <p v-else>10 - 18</p>
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
    <div class="reviews"></div>
    <div class="facebook"></div>
  </div>
</template>

<script>
/* import Vue from "vue"; var d = new Date(); var n = d.getDay();
console.log(n); window.onload = function() { new Vue({ el: "#openingHour", data:
{ dayOfWeek: n } }); };*/
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.background {
  position: relative;
  left: 0;
  width: 100vw;
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

.home {
  margin-top: 80px;
  margin-bottom: 200px;
}

.brushStroke {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.brushStroke img {
  width: 100vw;
}
.overBrushStroke {
  position: absolute;
}
</style>
