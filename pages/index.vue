<template>
  <div class="homePage">
    <homeBanner/>
    <homeAboutUniversity/>
    <homeJourney/>
    <homeFaculties/>
    <homeNews/> 
    <homeContactUs/>
    <homeEvents/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',  
}
</script>

<style>
.homePage {
  background-image: url("../assets/images/backImage.png");
  background-repeat: repeat-y;
  background-position: right;
  background-size: 170px;
}
</style>