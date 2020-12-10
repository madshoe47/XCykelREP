<template>
  <div class="footerDesk">
    <div class="row1">
    <div class="allText">
    <h3>X Cykel REP.</h3>
    <p>Skovgaardsgade 5</p>
    <p>8000 Aarhus C</p>
    <a href="https://g.page/XCYKELREP?share">Find vej</a>
    </div>

    <br />


    <p>
      Tlf:
      <a class="underline2" href="tel: 26 43 07 92">26 43 07 92</a>
    </p>

    </div>
     <div class="row2">
    <h3>Åbningstider</h3>
    <p>Man-fre: 10-18</p>
    <p>Lør-søn: Lukket</p>

<br />
    <p>CVR-nummer</p>
    <p>39674408</p>
    

  </div>

 <div class="row3">
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

    <img class="footer-bike" src="../assets/cykelfooter.svg" alt="cykel" />
  </div>
</template>

<script>
export default { name: "ThisFootDesk", data() { return {}; } };
</script>

<style>
.footerDesk {
  background-color: #f2cb03;
  position: relative;
    display: flex;
    flex-direction: row;
    z-index: 1;
    overflow: hidden;
    justify-content: flex-start;
    text-align: start;
    width: 100%;
    padding: 5%;
    color: black;
}

.footer-bike {
  position: absolute;
  left: 40%;
  width: 100%;
  z-index: 2;
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


.row2, .row3 {
  margin-left: 5%;
}

.footer p {
  margin-bottom: 5px;
}

.footer h3 {
  font-size: 24px;
  font-weight: 600;
}

</style>