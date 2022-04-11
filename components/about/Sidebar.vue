<template>
  <div class="sidebar">
    <div class="menuBlock">
      <h2>About Us</h2>
      <ul>
        <li><nuxt-link to=""> University </nuxt-link></li>
        <li><nuxt-link to=""> Rector's congratulations </nuxt-link></li>
        <li><nuxt-link to=""> Our mission </nuxt-link></li>
        <li><nuxt-link to=""> Structure </nuxt-link></li>
        <li><nuxt-link to=""> Our team </nuxt-link></li>
        <li><nuxt-link to=""> Policies and regulations </nuxt-link></li>
      </ul>
    </div>
    <h2> Diplomat events </h2>
    <div class="newsBlock">
      <div class="block" v-for="(item, index) in events" :key="index">
        <nuxt-link to="">
          <div class="image">
            <img :src="item.url" alt="">
          </div>
          <div class="content">
            <p>{{item.title}}</p>
            <p><span>{{item.day}} {{item.date}}</span> <span>{{item.category_title}}</span></p>
          </div>
        </nuxt-link>
      </div>      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {     
      limitEvents: 3,
      pageEvents: 1
    };
  },
  computed: {
    // ...mapGetters("news", ["news", "count"]),
    ...mapGetters("events", ["events", "count"]),
  },
  methods: {
    // ...mapActions("news", ["fetch"]),
    ...mapActions("events", ["fetchEvents"]),
  },
  mounted() {
    // this.fetch({
    //   params: {
    //     limit: this.limit,
    //     page: this.page,
    //   },
    // });
    this.fetchEvents({
      params: {
        limit: this.limitEvents,
        page: this.pageEvents,
      },
    });
  },
};
</script>