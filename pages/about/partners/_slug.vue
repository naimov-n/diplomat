<template>
  <div class="partnerView">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="aboutUniversity-left">
            <div class="image">
              <div class="carousel-wrapper">
                <div v-swiper:mySwiper="options">
                  <div class="swiper-wrapper">
                    <div v-for="img in gallery" :key="img.id" class="img-warpper swiper-slide">
                      <img :src="img.img" />
                    </div>
                  </div>
                  <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
                </div>
              </div>
            </div>

            <div class="content">
                <div class="logo" v-if="data.url" style="margin-bottom: 16px;">
                    <img :src="data.url" alt="" style="height: 44px; width: auto;">
                </div>
              <h2>{{data.title}}</h2>
              <p style="padding-top: 16px"  v-html="data.content">
               {{data.content}}
              </p>  
            </div>
          </div>
        </div>
        <div class="col-3">
          <aboutSidebar />
        </div>
      </div>
    </div>

    data:
    <pre>{{ data }}</pre>
    gallery:
    <pre>{{ gallery }}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
   data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      img: require("~/assets/images/it.jpg"),
    };
  },
  computed: {
    ...mapGetters("partners", ["data", "gallery"]),
  },
  methods: {
    ...mapActions("partners", ["fetchDetail"]),
  },
  async mounted() {
    await this.fetchDetail({
      slug: this.$route.params.slug,
    });
  },
};
</script>

<style>
</style>