<template>
  <div class="aboutUniversity" :style="`background-image: url(${img})`">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="aboutUniversity-left">
            <div class="image" v-if="gallery.length > 0">
              <div class="carousel-wrapper">
                <div v-swiper:mySwiper="options">
                  <div class="swiper-wrapper">
                    <div
                      v-for="img in gallery"
                      :key="img.id"
                      class="img-warpper swiper-slide"
                    >
                      <img :src="img.img" />
                    </div>
                  </div>
                  <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
                </div>
              </div>
            </div>

            <div class="content">
              <h2 v-if="this.static.title">{{ this.static.title }}</h2>
              <div
                style="padding-top: 16px"
                v-if="this.static.short_content"
                v-html="this.static.short_content"
              >
                {{ this.static.short_content }}
              </div>
              <div style="padding-top: 16px" v-if="this.static.content">
                {{ this.static.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <aboutSidebar />
        </div>
      </div>
    </div>
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
      img: require("~/assets/images/backImage.png"),
    };
  },
  computed: {
    ...mapGetters("static", ["static", "gallery"]),
  },
  methods: {
    ...mapActions("static", ["fetch"]),
  },
  async mounted() {
    await this.fetch({ slug: this.$route.params.slug });
    //  console.log(this.gallery)
  },
};
</script>

<style  scoped>

</style>