<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.svg" alt="" />
      <div class="callus">
        <p>
          Ring eller skriv <br />Tlf:
          <a class="underline" href="tel:26 43 07 92">26 43 07 92</a>
        </p>
      </div>
    </div>

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
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: HelveticaNeue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
body {
  background-color: #3a393e;
}

h1 {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  color: #f2cb03;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3a393e;
  -webkit-box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.49);
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.49);
  height: 80px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.header img {
  height: 80%;
}

.underline {
  color: #fff;
  text-decoration: underline;
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
}

#nav a img {
  height: 25px;
  width: 25px;
}

.navElement {
  width: 25%;
}

.navElement a.router-link-exact-active {
  background-color: #f2cb03;
}
</style>
