<template>
  <div id="app">
    <mq-layout mq="mobile">
    <div class="header">
      <img src="./assets/logo.svg" alt="" />
      <div class="callus">
        <p>
          Ring eller skriv <br />Tlf:
          <a class="underline" href="tel:26 43 07 92">26 43 07 92</a>
        </p>
      </div>
    </div>
    </mq-layout>

    <mq-layout mq="bigger+">
      <div class="headerDesktop">
      <img src="./assets/logoDesktop.svg" alt="" />
      <div id="navDesktop">
      <div class="navElement">
        <router-link to="/"
          ><img src="./assets/forside.svg" alt="" />Forside</router-link
        >
      </div>
      <div class="navElement">
        <router-link to="/priser"
          ><img src="./assets/priser.svg" alt="" />Priser</router-link
        >
      </div>
      <div class="navElement">
        <router-link to="/omxcykelrep"
          ><img src="./assets/omos.svg" alt="" />Om os</router-link
        >
      </div>
      <div class="navElement">
        <router-link to="/kontakt"
          ><img src="./assets/kontakt.svg" alt="" />Kontakt</router-link
        >
      </div>
    </div>
    </div>
 </mq-layout>
<mq-layout mq="mobile">
    <div id="nav">
      <div class="navElement">
        <router-link to="/"
          ><img src="./assets/forside.svg" alt="" />Forside</router-link
        >
      </div>
      <div class="navElement">
        <router-link to="/priser"
          ><img src="./assets/priser.svg" alt="" />Priser</router-link
        >
      </div>
      <div class="navElement">
        <router-link to="/omxcykelrep"
          ><img src="./assets/omos.svg" alt="" />Om os</router-link
        >
      </div>
      <div class="navElement">
        <router-link to="/kontakt"
          ><img src="./assets/kontakt.svg" alt="" />Kontakt</router-link
        >
      </div>
    </div>
    </mq-layout>
    <router-view />

    <mq-layout mq="mobile">
     <div class="footerContainer">
    <ThisFoot></ThisFoot>
    </div>
 </mq-layout>
    <mq-layout mq="bigger+">
 <div class="footerContainerSd">
    <ThisFootDesk></ThisFootDesk>
    </div>
       </mq-layout>
  </div>
</template>

<script>
import ThisFoot from './components/footer'
import ThisFootDesk from './components/footerDesk'
export default {
  components: {
    ThisFoot,
    ThisFootDesk
  }, 
};
</script>

<style>
#app {
  font-family: HelveticaNeue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  z-index: 99;
  background-color: #3A393E
}
body {
    background-color: #3a393e;
    width: 100%;
    margin: 0;
}

h1 {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  color: #f2cb03;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3A393E;
  height: 80px;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  align-self: center;
  z-index: 92;
}
.header p {
  margin-bottom: 0;
}

.header img
 {
  height: 80%;
  margin-left: 2%;
  margin-top: 1%;
  z-index: 92;
}
.headerDesktop {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  height: 80px;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 92;
}

.headerDesktop img{
  height: 80%;
  margin-left: 2%;
  margin-top: 1%;
  z-index: 92;
  }

.underline {
  color: #fff;
  text-decoration: underline;
  z-index: 92;
}

#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  z-index: 92;
}

#navDesktop {
  position: fixed;
  top: 0;
  right: 0;
   height: 80px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  z-index: 92;

}

#nav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  z-index: 92;
}

#nav a img {
  height: 25px;
  width: 25px;
  z-index: 92;
}

#navDesktop a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  height: 80px;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  z-index: 92;
}

#navDesktop a img {
  height: 25px;
  width: 25px;
  z-index: 92;
}

.navElement {
  width: 25%;
  z-index: 92;
}

.navElement a.router-link-exact-active {
  background-color: #f2cb03;
  z-index: 92;
  height: 100%;
}

.footerContainer {
  background-color: #f2cb03;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  color: black;
  text-align: start;
  margin-bottom: 100px;
}
</style>
