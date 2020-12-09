<template>
  <div class="animated fadeIn ">
    <b-card-group  deck >
        <b-card  v-for="(club,index) in currentPageClubs" :key="index">
            <h4 class="card-title">
                {{club.description}}
            </h4>
            <p class="card-text">
                {{club.price}}
            </p>
            <v-rating
            :value="4.5"
            color="black"
            dense
            half-increments
            readonly
            size="24"
          ></v-rating>

            <p class="card-text">
                {{club.country}}
            </p>
        </b-card>
    </b-card-group>

    <div class="card-pagination">
        <div class="page-index" v-for="i in nbPages" :key="i"  @click="goto(i)" :class={active:currentPage(i)}></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Slider",
  data: function () {
    return {
      clubs: [
          {id:1,  description:'Jo Nielsen', price:'Nede i Godsbanens hyggelige hjerte ligger cykelsmedenes svar på Lucky Look! Og med det mener jeg, at cykelsmeden er hurtig! Han lavede min cykel on sight. Jeg føler mig mødt som et menneske med en cykel.', country:'3 måneder siden'},
          {id:2,  description:'Mads Hoe', price:'Nede i Godsbanens hyggelige hjerte ligger cykelsmedenes svar på Lucky Look! Og med det mener jeg, at cykelsmeden er hurtig! Han lavede min cykel on sight. Jeg føler mig mødt som et menneske med en cykel.', country:'3 måneder siden'},
          {id:3,  description:'Jonathan Stensgaard', price:'Nede i Godsbanens hyggelige hjerte ligger cykelsmedenes svar på Lucky Look! Og med det mener jeg, at cykelsmeden er hurtig! Han lavede min cykel on sight. Jeg føler mig mødt som et menneske med en cykel.', country:'3 måneder siden'},
          {id:4,  description:'Sandra Birkefeldt', price:'Nede i Godsbanens hyggelige hjerte ligger cykelsmedenes svar på Lucky Look! Og med det mener jeg, at cykelsmeden er hurtig! Han lavede min cykel on sight. Jeg føler mig mødt som et menneske med en cykel.', country:'3 måneder siden'},
          {id:5,  description:'Anne Skaanning', price:'Nede i Godsbanens hyggelige hjerte ligger cykelsmedenes svar på Lucky Look! Og med det mener jeg, at cykelsmeden er hurtig! Han lavede min cykel on sight. Jeg føler mig mødt som et menneske med en cykel.', country:'3 måneder siden'},
      ],
      paginatedClubs:[],
      nbPages:0,
      nbRowPerPage:1,
      currentPageIndex:0
    }
  },
  computed: {
      formattedClubs() {
          return this.clubs.reduce((c, n, i) => {
              if (i % 4 === 0) c.push([]);
              c[c.length - 1].push(n);
              return c;
          }, []);
      },
      currentPageClubs(){
         this.createPages();

        return this.paginatedClubs[this.currentPageIndex];
      }
  },
  methods:{
    currentPage(i){
        return i-1===this.currentPageIndex;
    },
      createPages() {

      let lengthAll = Object.keys(this.clubs).length;
      this.nbPages = 0;
       for (let i = 0; i < lengthAll; i = i + this.nbRowPerPage) {
        this.paginatedClubs[this.nbPages] = this.clubs.slice(
          i,
          i + this.nbRowPerPage
        );
        this.nbPages++;
      }
    },
    goto(i){

      this.currentPageIndex=i-1;
    }
  }
}
</script>
<style>
.card-body {
   background-color: #f2cb03;
}
.card-pagination{
  display:flex;
  align-items: center;
  justify-content: center;
  color: black;
}

.card-title {
    font-weight: 700;
}

.card-text, 
.card-title {
    color:black;
    text-align: start;
}

.page-index{
  margin-left:10px;
  width:15px;
  height:15px;
  border-radius:15px;
  background-color: black;
  margin-bottom: 50px;
}
.active{
width:20px;
  height:20px;
  border-radius:20px;
  background-color: #f2cb03;

}
</style>