<template>
  <div class="bannerHead">
    <div class="bannerHead__top">
      <div class="container">
        <div class="left">
          <a href="tel:+998 99 777 77 77">
            <i class="icon-call"></i>
            +998 99 777 77 77
          </a>
          <ul>
              <li v-for="item in social" :key="item.id">
                <a :href="item.url"><i :class="`icon-${item.title}`"></i></a>
              </li>
            </ul>
        </div>
        <div class="right">
          <a href=""> Apply Now </a>
          <div class="search">
            <i class="icon-search"></i>
          </div>
          <div class="language">
              <div class="lang-switch">
                <div class="">
                <nuxt-link :to="switchLocalePath('en')">
                  En
                </nuxt-link>
              </div>
              <div class="">
                <nuxt-link :to="switchLocalePath('uz')">
                  Uz
                </nuxt-link>
              </div>
              <div class="">
                <nuxt-link :to="switchLocalePath('ru')">
                  Ru
                </nuxt-link>
              </div>
              </div>
            <div class="btn-group">
              <button
                type="button"
                class="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                En
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Uz</button>
                <button class="dropdown-item" type="button">Ru</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bannerHead__menu">
      <div class="container">
        <nuxt-link to="/" class="logo">
          <img src="../../assets/images/headerLogo2.png" alt="" />
        </nuxt-link>
        <div class="menu">
          <i class="icon-tuit"></i>
         <div class="header-men">
                   <HomeRecursiveMenu v-for="(item) in list" :key="item.id" :menu="item" />
                </div>
        </div>
        <div class="fullmenu">
          <i class="icon-barsMenu"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
  computed: {
    ...mapGetters("menu", ["list"]),
    ...mapGetters("social", ["social"]),
  },
  methods:{
    ...mapActions("menu", ["fetch"]),
    ...mapActions("social", ["fetchSocial"]),
  },
  mounted() {
    this.fetch();
    this.fetchSocial();
    console.log(this.menu)
  }
};
</script>

<style scoped>
.header-men {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
}

.header-men .menu-title, .header-men .m>a {
  color: #212721 !important;
}

.lang-switch {
  display: flex;
}

</style>
