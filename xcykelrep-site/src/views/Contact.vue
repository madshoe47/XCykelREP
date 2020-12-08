<template>
  <div class="contact">
    <div>
      <h1>Skriv til os</h1>
      <form onsubmit="return false" id="kontaktForm" class="kontaktForm">
        <label for="">Navn:</label>
        <input required v-model="kontakt.navn" name="name" type="text" />
        <label for="">Telefonnummer:</label>
        <input
          v-model="kontakt.telefonnummer"
          name="telephone"
          type="numbers"
          required
        />
        <label for="">Ønsket indleveringstid:</label>
        <input
          id="date"
          v-model="kontakt.dato"
          name="dateTime"
          type="datetime-local"
          min="2021-01-01T10:00"
          max="2021-12-30T00:00"
          required
        />
        <div>
          <label for="">Tryk på området med problemet:</label>
          <div class="cykelKnapper">
            <img
              id="gulCykel"
              class="gulCykel"
              src="../assets/gul_cykel.svg"
              alt=""
            />
            <img
              id="styrBillede"
              class="styrBillede gem"
              src="../assets/styr.svg"
              alt=""
            />
            <img
              id="forHjulBillede"
              class="forHjulBillede gem"
              src="../assets/hjul.svg"
              alt=""
            />
            <img
              id="bagHjulBillede"
              class="bagHjulBillede gem"
              src="../assets/hjul.svg"
              alt=""
            />
            <img
              id="forBillede"
              class="forBillede gem"
              src="../assets/for.svg"
              alt=""
            />
            <img
              id="bagBillede"
              class="bagBillede gem"
              src="../assets/bag.svg"
              alt=""
            />
            <img
              id="krankBillede"
              class="krankBillede gem"
              src="../assets/krank.svg"
              alt=""
            />
            <button
              v-on:click="skiftDel('Baghjul', 'bagBillede')"
              class="noBackBorder bagHjul"
            >
              <img src="../assets/plus.svg" alt="" />
            </button>
            <button
              v-on:click="skiftDel('Forhjul', 'forBillede')"
              class="noBackBorder forHjul"
            >
              <img src="../assets/plus.svg" alt="" />
            </button>
            <button
              v-on:click="skiftDel('Krank', 'krankBillede')"
              class="noBackBorder krank"
            >
              <img src="../assets/plus.svg" alt="" />
            </button>
            <button
              v-on:click="skiftDel('Fordæk', 'forHjulBillede')"
              class="noBackBorder forDak"
            >
              <img src="../assets/plus.svg" alt="" />
            </button>
            <button
              v-on:click="skiftDel('Bagdæk', 'bagHjulBillede')"
              class="noBackBorder bagDak"
            >
              <img src="../assets/plus.svg" alt="" />
            </button>
            <button
              v-on:click="skiftDel('Styr', 'styrBillede')"
              class="noBackBorder styr"
            >
              <img src="../assets/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <label for="">Forklar porblemet:</label>
        <input
          v-model="kontakt.problem"
          placeholder=""
          id="problemet"
          class="problemet"
          type="text"
          required
        />

        <button v-on:click="sendForm" class="send">Send</button>
      </form>
    </div>

    <h1>Åbningstider</h1>
    <div class="kontaktTekst">
      <h3>Værksted og Kontor</h3>
      <p>Man-fre: 10-18</p>
      <p>Lør-søn: Lukket</p>
    </div>

    <div class="kontaktOgIkon">
      <img src="../assets/sms.svg" alt="" />
      <div class="kontaktTekst">
        <h3>SMS</h3>
        <p>Alle dage hele døgnet</p>
      </div>
    </div>
    <div class="kontaktOgIkon">
      <img src="../assets/kontakt_hvid.svg" alt="" />
      <div class="kontaktTekst">
        <h3>Ring</h3>
        <p>Hverdage 10-18</p>
      </div>
    </div>

    <h1>Find os</h1>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="300"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=x%20cykel%20rep&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Contact",
  data() {
    return {
      kontakt: {
        navn: null,
        internDato: "",
        telefonnummer: null,
        dato: null,
        tid: null,
        del: "",
        problem: null,
      },
    };
  },
  methods: {
    skiftDel(del, billede) {
      console.log(del);
      this.kontakt.del += del + " ";
      console.log(this.kontakt);
      let delBillede = "#" + billede;
      console.log(delBillede);
      let billedet = document.querySelector(delBillede);
      console.log(billedet);
      billedet.classList.toggle("gem");
    },
    sendForm() {
      let isValid = document.querySelector("#kontaktForm").checkValidity();
      if (isValid) {
        this.problem = document.querySelector("#problemet");
        console.log(this.kontakt);
        let dato = this.kontakt.dato;
        this.kontakt.internDato = dato;
        let tidspunkt = dato.substr(11, 5);
        console.log(tidspunkt);
        let nyDato = dato.substr(0, 10);
        this.kontakt.dato = nyDato;
        this.kontakt.tid = tidspunkt;
        console.log(this.kontakt);
      }
      postRef.add(this.kontakt);
    },
  },
};
</script>

<style scoped>
.gem {
  display: none;
}

.krankBillede {
  position: absolute;
  right: 47%;
  top: 49%;
  height: 36%;
}
.forBillede {
  position: absolute;
  right: 16%;
  top: 43%;
  width: 10%;
}
.bagBillede {
  position: absolute;
  left: 16%;
  top: 43%;
  width: 18%;
}
.forHjulBillede {
  position: absolute;
  right: -0.5%;
  top: 36%;
  width: 37%;
}

.bagHjulBillede {
  position: absolute;
  left: -0.5%;
  top: 36%;
  width: 37%;
}

.styrBillede {
  position: absolute;
  right: 28%;
  top: 3%;
  width: 16%;
}
.kontaktOgIkon {
  display: flex;
  justify-content: left;
  margin: 16px 0;
}

.kontaktOgIkon img {
  margin-right: 16px;
}

.kontaktTekst p,
.kontaktTekst h3 {
  margin: 0;
}

.kontaktTekst h3 {
  margin-bottom: 4px;
}

h1 {
  text-align: left;
}
.contact {
  width: 90%;
  margin: 80px auto 110px auto;
}
.kontaktForm {
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;
  margin: auto;
}

input {
  height: 32px;
  margin-bottom: 16px;
  border-radius: 8px;
  font-size: 24px;
}
.gulCykel {
  opacity: 0.3;
  margin-top: 8px;
}

.cykelKnapper {
  position: relative;

  margin: auto 0;
}

.noBackBorder {
  background-color: transparent;
  border: none;
}

.bagHjul {
  position: absolute;
  left: 11%;
  bottom: 22%;
}

.forHjul {
  position: absolute;
  right: 11%;
  bottom: 22%;
}

.krank {
  position: absolute;
  right: 45%;
  bottom: 22%;
}

.forDak {
  position: absolute;
  right: 3%;
  bottom: 44%;
}

.bagDak {
  position: absolute;
  left: 3%;
  bottom: 44%;
}

.styr {
  position: absolute;
  right: 30%;
  top: 2%;
}

.problemet {
  height: 80px;
}

.send {
  background-color: #f2cb03;
  text-align: center;
  align-self: flex-end;
  border: none;
  font-size: 16px;
  font-weight: 700;
  border-radius: 28px;
  height: 30px;
  width: 77px;
  color: black;
}

* {
  text-align: left;
}
</style>