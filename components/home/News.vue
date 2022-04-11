<template>
  <div class="news pt-60 pb-80">
    <div class="container">
      <div class="news-head d-flex justify-content-between">
        <div>
          <p class="themeP">The latest stories from Diplomat</p>
          <h2 class="themeH">Diplomat news</h2>
        </div>
        <nuxt-link to="/news/" class="btnBlue"> View more </nuxt-link>
      </div>
      <div class="news-item">
        <div class="row">         
          <div
                  v-for="(item, index) in news"
                  :key="index"
                  :class="[index == 0 && 'col-6', index > 0 && 'col-3']"
                  data-aos="flip-left"
                  data-aos-duration="=450"
                >
                  <nuxt-link :to="`/news/${item.slug}`" class="block">
                    <div class="image">
                      <img :src="item.url" alt="" />
                    </div>
                    <div class="content">
                      <p class="date">{{ item.date }}</p>
                      <h2>
                        {{ item.title }}
                      </h2>
                    </div>
                  </nuxt-link>
                </div>
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
      page: 1
    };
  },
  computed: {
    ...mapGetters("news", ["news"]),
  },
  methods: {
    ...mapActions("news", ["fetch"]),    
  },
  mounted() {
    this.fetch({
      params:{
        limit:9,
        page: this.page
      }
    });    
  },
};
</script>