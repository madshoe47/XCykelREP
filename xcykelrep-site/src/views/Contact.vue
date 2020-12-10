<template>
  <div class="contact">
    <img class="baggrundsX" src="../assets/x.svg" alt="" />
    <div>
      <h1>Skriv til os</h1>
      <form onsubmit="return false" id="kontaktForm" class="kontaktForm">
        <div class="input">
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
          <div class="cykelMobil">
            <label for="">Tryk på området med problemet:</label>
            <div class="cykelKnapper">
              <img
                id="gulCykel"
                class="gulCykel"
                src="../assets/gul_cykel.svg"
                alt="gul cykel"
              />
              <img
                id="styrBillede"
                class="styrBillede gem"
                src="../assets/styr.svg"
                alt="cykelstyr"
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
                alt="cykelhjul"
              />
              <img
                id="forBillede"
                class="forBillede gem"
                src="../assets/for.svg"
                alt="cykeldel"
              />
              <img
                id="bagBillede"
                class="bagBillede gem"
                src="../assets/bag.svg"
                alt="cykel del"
              />
              <img
                id="krankBillede"
                class="krankBillede gem"
                src="../assets/krank.svg"
                alt="cyek krank"
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

          <label for="">Forklar problemet:</label>
          <textarea
            v-model="kontakt.problem"
            placeholder=""
            id="problemet"
            class="problemet"
            type="text"
            required
            rows="5"
            cols="60"
          >
            Enter details here...
         </textarea
          >

          <button v-on:click="sendForm" class="send">Send</button>
        </div>

        <div class="cykelLaptop">
          <label for="">Tryk på området med problemet:</label>
          <div class="cykelKnapper">
            <img
              id="gulCykel"
              class="gulCykel"
              src="../assets/gul_cykel.svg"
              alt="gul cykel"
            />
            <img
              id="styrBillede"
              class="styrBillede gem"
              src="../assets/styr.svg"
              alt="cykelstyr"
            />
            <img
              id="forHjulBillede"
              class="forHjulBillede gem"
              src="../assets/hjul.svg"
              alt="cykelhjul"
            />
            <img
              id="bagHjulBillede"
              class="bagHjulBillede gem"
              src="../assets/hjul.svg"
              alt="cykeldel"
            />
            <img
              id="forBillede"
              class="forBillede gem"
              src="../assets/for.svg"
              alt="cykeldel"
            />
            <img
              id="bagBillede"
              class="bagBillede gem"
              src="../assets/bag.svg"
              alt="cykeldel"
            />
            <img
              id="krankBillede"
              class="krankBillede gem"
              src="../assets/krank.svg"
              alt="cykeldel"
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
      </form>
      <div>
        <transition name="modal">
          <div v-if="isOpen">
            <div class="overlay" @click.self="isOpen = false">
              <div class="modal">
                <h1>Tak for din reservation!</h1>
                <p>
                  Du har bestilt tid
                  <strong
                    >D. {{ this.kontakt.dato }} kl.
                    {{ this.kontakt.tid }}</strong
                  >
                </p>
                <p>
                  Hvis du har ydeligere spørgsmål, kan jeg kontaktes på:
                  <br /><a href="tel:26430792">26430792</a>
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="aabning">
      <div>
        <h1>Åbningstider</h1>
        <div class="kontaktTekst">
          <h3>Værksted og Kontor</h3>
          <p>Man-fre: 10-18</p>
          <p>Lør-søn: Lukket</p>
        </div>

        <div class="kontaktOgIkon">
          <img src="../assets/sms.svg" alt="sms ikon" />
          <div class="kontaktTekst">
            <h3>SMS</h3>
            <p>Alle dage hele døgnet</p>
          </div>
        </div>
        <div class="kontaktOgIkon">
          <img src="../assets/kontakt_hvid.svg" alt="telefon ikon" />
          <div class="kontaktTekst">
            <h3>Ring</h3>
            <p>Hverdage 10-18</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Find os</h1>
        <mq-layout mq="mobile">
          <div class="mapouter kortMobil">
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
        </mq-layout>
        <mq-layout mq="bigger+">
          <div class="mapouter kortLaptop">
            <div class="gmap_canvas">
              <iframe
                width="700"
                height="350"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=x%20cykel%20rep&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </mq-layout>
        <mq-layout mq="tablet">
          <div class="mapouter kortMellem">
            <div class="gmap_canvas">
              <iframe
                width="400"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=x%20cykel%20rep&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </mq-layout>
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
      isOpen: false,
    };
  },
  methods: {
    skiftDel(del, billede) {
      this.kontakt.del += del + " ";
      let delBillede = billede;
      let billeder = document.getElementsByClassName(delBillede);
      for (const billede of billeder) {
        billede.classList.toggle("gem");
      }
    },
    sendForm() {
      this.isOpen = true;
      let isValid = document.querySelector("#kontaktForm").checkValidity();
      if (isValid) {
        let dato = this.kontakt.dato;
        this.kontakt.internDato = dato;
        let tidspunkt = dato.substr(11, 5);
        let nyDato =
          dato.substr(8, 2) + "-" + dato.substr(5, 2) + "-" + dato.substr(0, 4);
        this.kontakt.dato = nyDato;
        this.kontakt.tid = tidspunkt;
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
  margin: 120px auto 40px auto;
}
.kontaktForm {
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;
  margin: auto;
}

input,
textarea {
  background-color: #fff;
  height: 32px;
  margin-bottom: 16px;
  border-radius: 8px;
  font-size: 24px;
  width: 100%;
  max-width: 500px;
}
.gulCykel {
  opacity: 0.3;
  margin-top: 8px;
}

.cykelKnapper {
  position: relative;
  max-width: 400px;
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

.modal {
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
  color: black;
}

.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

a {
  color: black;
}

form div {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 750px) {
  .kortMellem {
    display: none;
  }

  .baggrundsX {
    display: none;
  }
}

@media screen and (min-width: 750px) {
  .cykelMobil,
  .kortMobil {
    display: none;
  }
  .kontaktForm {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
  }
  .contact {
    width: 75%;
  }
  .cykelLaptop {
    max-width: 100%;
    width: 45%;
  }
  .cykelKnapper {
    max-width: 1000px;
  }
  .input {
    width: 40%;
  }
  .styr {
    top: 0%;
  }
  .krank {
    right: 46%;
  }
  .forHjul {
    right: 13%;
  }
  .aabning {
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
  }
  .baggrundsX {
    position: absolute;
    opacity: 0.1;
    top: 55%;
    width: 800px;
    right: 52%;
    z-index: 10;
  }
  .contact {
    overflow: hidden;
  }
}

@media screen and(max-width:1300px) {
  .kortLaptop {
    display: none;
  }
}

@media screen and(min-width:1300px) {
  .kortMellem {
    display: none;
  }
}
</style>
