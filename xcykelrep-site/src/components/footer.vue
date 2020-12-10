<template>
  <footer>
    <img class="footer-bike" src="../assets/cykel2.svg" alt="cykel ikon" />
    <div class="allText">
    <h3>X Cykel REP.</h3>
    <p>Skovgaardsgade 5</p>
    <p>8000 Aarhus C</p>
    <a href="https://g.page/XCYKELREP?share">Find vej</a>

    <br />
    <br />

    <p>
      Tlf:
      <a class="underline2" href="tel: 26 43 07 92">26 43 07 92</a>
    </p>
    <br />
    <p>CVR-nummer</p>
    <p>39674408</p>
    <br />

    <h3>Åbningstider</h3>
    <p>Man-fre: 10-18</p>
    <p>Lør-søn: Lukket</p>

    <br />
    <h3>Følg os</h3>
    <img
      class="footer-icons"
      src="../assets/facebook.svg"
      alt="facebook logo"
    />

    <p>
      Hos os kan du betale med
      <img
        class="footer-icons"
        src="../assets/mobilepay.svg"
        alt="mobilepay logo"
      />
    </p>
    </div>
  </footer>
</template>

<script>
export default { name: "ThisFoot", data() { return {}; } };
</script>

<style>
footer {
  background-color: #f2cb03;
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  padding: 5%;
}

.footer-bike {
  position: absolute;
  top: 10%;
  left: -20%;
  width: 250%;
  z-index: -1;
}

.underline2 {
  text-decoration: underline;
  color: black;

}

.footer-icons {
  width: 50px;
  margin-top: 5px;
}

.allText {
  width: 90%;
  margin: auto;
}
</style>