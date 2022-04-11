<template>
  <div class="pageHeader">
    <div class="image">
      <img src="../../assets/images/pageHeader.jpg" alt="" />
    </div>
    <div class="content">
      <div class="container">
        <h2 v-if="$route.path.split('/')[3]"> {{$route.path.split('/')[3]}} </h2>
        <h2 v-else-if="$route.path.split('/')[2]"> {{$route.path.split('/')[2]}} </h2>
        <h2 v-else> {{$route.path.split('/')[1]}} </h2>
        <ul>
          <li style="text-transform: capitalize;"><nuxt-link to="/"> Home </nuxt-link></li>
          <li style="text-transform: capitalize;">{{$route.path.split('/')[1]}}</li>
          <li style="text-transform: capitalize;" v-if="$route.path.split('/')[2]">{{$route.path.split('/')[2]}}</li>
          <li style="text-transform: capitalize;" v-if="$route.path.split('/')[3]">{{$route.path.split('/')[3]}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

