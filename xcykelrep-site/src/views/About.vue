<template>
  <div class="about">
    
    <section class="img-section">

    <img src="../assets/rasmus.png" alt="Rasmus" class="rasmus-img">

    <img src="../assets/tekst.png" alt="Om X Cykel REP." class="tekst-img">

</section>

<div class="tekst-section">
<div class="pictureOutside">
    <img src="../assets/x-baggrund-beskaaret.png" alt="X">
</div>
    <p>I over 10 år har Rasmus været en del af Institut for (X), hvor han har udfoldet sine kreative evner og dyrket forskellige interesser. Siden Rasmus var teenager, har han rodet med cykler, og er det man kalder autodidakt. Han har været ansat som cykelmekaniker i 6 år. <br> <br> 
    Med den nye arkitektskole springer en helt ny bydel frem som får navnet Aarhus K og som gør det muligt at bevæge sig igennem et kultur-mekka. Midt i det område finder du X Cykel REP. Det er en container, som Rasmus har renoveret og indrettet som værksted. Rasmus har også en container med opbevaring af cykler og reservedele, og du kan derfor få opbevaret din cykel sikkert og trygt natten over, hvis den ikke er færdig samme dag.</p>

</div>

<section class="galleri-section">

    <h3>Galleri</h3>

    <div class="gallery">

    <a class="picturesInGallery" href="#img1">
        <img class="thumb" src="../assets/rasmus-arbejder.png">
    </a>
    <!-- lightbox container hidden with CSS -->
    <div class="lightbox" id="img1">
        <a href="#img6" class="light-btn btn-prev"> <img src="../assets/arrow-left.png" alt="arrow"> </a>
            <a href="#_" class="btn-close"><img src="../assets/cross.png" alt="cross"></a>
            <img src="../assets/rasmus-arbejder.png">
        <a href="#img2" class="light-btn btn-next"><img src="../assets/arrow-right.png" alt="arrow"></a>
    </div>

    <a class="picturesInGallery" href="#img2">
      <img class="thumb" src="../assets/vaerkstedet.png">
    </a>
    <!-- lightbox container hidden with CSS -->
    <div class="lightbox" id="img2">
        <a href="#img1" class="light-btn btn-prev"><img src="../assets/arrow-left.png" alt="arrow"></a>
            <a href="#_" class="btn-close"><img src="../assets/cross.png" alt="cross"></a>
            <img src="../assets/vaerkstedet.png">
        <a href="#img3" class="light-btn btn-next"><img src="../assets/arrow-right.png" alt="arrow"></a>
    </div>

    <a class="picturesInGallery" href="#img3">
      <img class="thumb" src="../assets/rabat.png">
    </a>
    <!-- lightbox container hidden with CSS -->
    <div class="lightbox" id="img3">
        <a href="#img2" class="light-btn btn-prev"><img src="../assets/arrow-left.png" alt="arrow"></a>
            <a href="#_" class="btn-close"><img src="../assets/cross.png" alt="cross"></a>
            <img src="../assets/rabat.png">
        <a href="#img4" class="light-btn btn-next"><img src="../assets/arrow-right.png" alt="arrow"></a>
    </div>

    <a class="picturesInGallery" href="#img4">
        <img class="thumb" src="../assets/skilt.png">
    </a>
    <!-- lightbox container hidden with CSS -->
    <div class="lightbox" id="img4">
        <a href="#img3" class="light-btn btn-prev"><img src="../assets/arrow-left.png" alt="arrow"></a>
            <a href="#_" class="btn-close"><img src="../assets/cross.png" alt="cross"></a>
            <img src="../assets/skilt.png">
        <a href="#img5" class="light-btn btn-next"><img src="../assets/arrow-right.png" alt="arrow"></a>
    </div>

    <a class="picturesInGallery" href="#img5">
      <img class="thumb" src="../assets/vaerktoej.png">
    </a>
    <!-- lightbox container hidden with CSS -->
    <div class="lightbox" id="img5">
        <a href="#img4" class="light-btn btn-prev"><img src="../assets/arrow-left.png" alt="arrow"></a>
            <a href="#_" class="btn-close"><img src="../assets/cross.png" alt="cross"></a>
            <img src="../assets/vaerktoej.png">
        <a href="#img6" class="light-btn btn-next"><img src="../assets/arrow-right.png" alt="arrow"></a>
    </div>

    <a class="picturesInGallery" href="#img6">
      <img class="thumb" src="../assets/rasmus-ejer.png">
    </a>
    <!-- lightbox container hidden with CSS -->
    <div class="lightbox" id="img6">
        <a href="#img5" class="light-btn btn-prev"><img src="../assets/arrow-left.png" alt="arrow"></a>
            <a href="#_" class="btn-close"><img src="../assets/cross.png" alt="cross"></a>
            <img src="../assets/rasmus-ejer.png">
        <a href="#img1" class="light-btn btn-next"><img src="../assets/arrow-right.png" alt="arrow"></a>
    </div>

    </div>

    </section>

  </div>
</template>

<script>

</script>


<style >

.about {
  margin-top: 100px;
  margin-bottom: 150px;
  max-width: 100%;
  overflow: hidden;
}

.img-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
}

.rasmus-img {
    width: 240px;
    height: 240px
}

.tekst-img {
    width: 30px;
}

.tekst-section {
    width: 90%;
    margin: auto;
    overflow: hidden;
     margin-bottom: 50px;
}

.pictureOutside {
  position: absolute;
  z-index: -1;
  margin-top: -140px;
  overflow: hidden;
}

.tekst-section img {
    width: 350px;
}

.tekst-section p {
    font-family: Montserrat;
    color: white;
    font-size: 0.8em;
    padding-top: 20px;
    text-align: justify;
    hyphens: auto;
       
}

.galleri-section {
    width: 90%;
    margin: auto;
   
}

.galleri-section h3 {
    font-family: Tahoma;
    color: #F2CB03;
    text-align: start;
}

.picturesInGallery {
  margin-top: 10px;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
}

.thumb {
    width: 145px;
}

.lightbox {
    position: fixed;
    z-index: 999;
    height: 0;
    width: 0;
    text-align: center;
    top: 0;
    left: 0;
    opacity: 0;
}

.lightbox img {
    position: relative;
    top: 30%;
    left: 0;
    max-width: 85%;
    max-height: 80%;
    margin-top: 2%;
    opacity: 0;
}

.lightbox:target {
    outline: none;
    width: 100%;
    height: 100%;
    opacity: 1 !important;

}

.lightbox:target img {
    opacity: 1;
    transition: opacity 0.6s;
}

.light-btn {
    padding: 5px 15px;
    vertical-align: middle;
    position: absolute;
    top: 45%;
    z-index: 99;
}

.btn-prev {
    position: absolute;
    left: 10%;
    top: 63%;
}

.btn-next {
    position: absolute;
    right: 10%;
    top: 63%;
}

.btn-close {
    position: absolute;
    right: 11%;
    top: 31%;
    z-index: 4;
    padding: 10px 15px;
}



</style>
