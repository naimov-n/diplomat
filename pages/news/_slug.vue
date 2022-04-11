<template>
  <div class="newsView">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="aboutUniversity-left">
            <div class="image">
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
              <p>{{ data.date }}</p>
              <h2>{{ data.title }}</h2>
              <p style="padding-top: 16px" v-html="data.content">
                {{ data.content }}
              </p>
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
      img: require("~/assets/images/it.jpg"),
    };
  },
  computed: {
    ...mapGetters("news", ["data", "gallery"]),
  },
  methods: {
    ...mapActions("news", ["fetchDetail"]),
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