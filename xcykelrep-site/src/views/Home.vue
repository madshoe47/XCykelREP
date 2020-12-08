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
            <p>{{dayOfWeek()}}</p>
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
    <div class="facebook">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FXCYKELREP&tabs=timeline&width=330&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2672707899663290" width="330" height="550" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
    <div class="footerContainer">
  <ThisFoot/>
    </div>
  </div>
</template>

<script>
/* import Footer from "@/components/footer.vue"; export default { name:
"Footer", components: { Footer: Footer } };*/ 
import ThisFoot from '../components/footer'
export default {
  components: {
    ThisFoot,
  }, 
  methods: {
    dayOfWeek() {
      var d = new Date(); 
      var day = d.getDay();
      if (day === 6) {
        return 'Lukket i dag'
      } else if (day === 0) {
        return 'Lukket i dag'
      } else{
        return '10 - 18'
      }}
  },
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.background {
  position: relative;
  left: -8px;
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
  margin-top: 75px;
  margin-bottom: 80px;
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

.reviews {
  margin-top: 50px;
  height: 300px;
  width: 100vw;
  position: relative;
  left: -8px;
  background-color: #f2cb03;
}

.footerContainer {
  width: 100vw;
  margin-top: 50px;
}

.facebook {
  margin-top: 50px;
}


</style>
