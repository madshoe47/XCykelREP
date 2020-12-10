<template>
  <div class="contact">
    <div class="contentContainer">
      <h2 class="headerPrices">24 timers reparationsgaranti</h2>
      <p class="textPrices">Få fikset din cykel indenfor 24 timer!</p>
      <p class="textPrices">
        Hos X Cykel REP er vi effektive og du kan derfor i de fleste tilfælde
        allerede hente din cykel dagen efter. Der skal dog tages for- behold for
        weekender og bestilling af dele, hvor der opstår leveringstid.
      </p>

     
      <div class="table">
 <mq-layout mq="tablet+">
   <img class="repDesk" src="../assets/repDesk.svg" alt="">
 </mq-layout>
<div class="tabletable">
   <h2 class="headerPrices">Priser*</h2>
      <table>
        <tr>
          <td>Lapning af cykel</td>
          <td>Kr. 75</td>
        </tr>
        <tr>
          <td>Slange skift</td>
          <td>Kr. 155</td>
        </tr>
        <tr>
          <td>Dæk + slange</td>
          <td>Kr. 350</td>
        </tr>
        <tr>
          <td>Ydre gearkabel</td>
          <td>Kr. 220</td>
        </tr>
        <tr>
          <td>Ydre bremsekabel</td>
          <td>Kr. 220</td>
        </tr>
        <tr>
          <td>Krankbox</td>
          <td>Kr. 500</td>
        </tr>
        <tr>
          <td>Kranksæt</td>
          <td>Kr. 500</td>
        </tr>
        <tr>
          <td>Kæde + tandhjul</td>
          <td>Kr. 320</td>
        </tr>
        <tr>
          <td>Kæde + krans</td>
          <td>Kr. 480</td>
        </tr>
        <tr>
          <td>Eger</td>
          <td>Kr. 150</td>
        </tr>
        <tr>
          <td>36 nye eger</td>
          <td>Kr. 725</td>
        </tr>
        <tr>
          <td>Bremseklods</td>
          <td>Kr. 175</td>
        </tr>
        <tr>
          <td>Bagskifter</td>
          <td>Kr. 450</td>
        </tr>
        <tr>
          <td>Forskifter</td>
          <td>Kr. 400</td>
        </tr>
        <tr>
          <td>Nyt baghjul</td>
          <td>Kr. 800</td>
        </tr>
        <tr>
          <td>Nyt forhjul</td>
          <td>Kr. 600</td>
        </tr>
        <tr>
          <td>Styrfittings</td>
          <td>Kr. 450</td>
        </tr>
        <tr>
          <td>Gearskiftegreb</td>
          <td>Kr. 450</td>
        </tr>
        <tr>
          <td>Bremsegreb 1 stk.</td>
          <td>Kr. 250</td>
        </tr>
        <tr>
          <td>Pedaler</td>
          <td>Kr. 200</td>
        </tr>
        <tr>
          <td>Pully hjul</td>
          <td>Kr. 250</td>
        </tr>
        <tr>
          <td>Skive klodsbremser</td>
          <td>Kr. 300</td>
        </tr>
        <tr>
          <td>Skive bremse</td>
          <td>Kr. 750</td>
        </tr>
      </table>
        <p class="italic">*Priserne er angivet fra</p>
      </div>
   

    
         </div>
    </div>
  </div>
</template>

<script></script>

<style>
.contact {
  text-align: start;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
}

.contentContainer {
  width: 90%;
  margin: auto;
}

.headerPrices {
  color: #f2cb03;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: 10px;
}
.textPrices {
  margin-bottom: 20px;
}

.textPrices,
td {
  color: white;
  font-family: helvetica;
}


.table {
  width: 90%;
  height: 1150px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 50px;
}

.tabletable {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
}

.repDesk {
  width: 80%;
}

table {
  width: 300px;
  margin: auto;
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 0;
}
table td {
  border: 1px solid white;
  padding: 5px;
}

.italic {

  font-style: italic;
  color: #ffffff;
  margin-top: 10px;
}
</style>
