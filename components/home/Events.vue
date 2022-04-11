<template>
    <div class="events pt-80 pb-80">
        <div class="container">
            <div>
                <p class="themeP">The latest events from Diplomat</p>
                <h2 class="themeH">Diplomat events</h2>
            </div>
            <div class="events-item">
                <div v-for="(item, index) in events" :key="index" class="block" data-aos="zoom-in" data-aos-duration="150">
                    <div class="block-left">
                        <h2>{{item.day}}</h2>
                        <p> <span>{{item.date}}</span> <br> <span>{{item.weeks}}</span></p>
                    </div>
                    <div class="block-center">
                        <div class="image">
                            <img :src="item.url" alt="">
                        </div>
                        <h2>
                            {{item.title}}
                        </h2>
                    </div>
                    <div class="block-right">
                        <div>
                            <h2>{{item.option_1}}</h2>
                            <p>{{item.category_title}}</p>
                        </div>
                        <nuxt-link to="/" class="btnWhite"> View more </nuxt-link>
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
      limitEvents: 2,
    //   pageEvents: 1
    };
  },
  computed: {    
    ...mapGetters("events", ["events", "count"]),
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]), 

    // newsAll: function() {        
    //     this.page++;
    //     this.fetch({
    //         params: {
    //             limit: this.limit,
    //             page: this.page,                
    //         },
    //     });
    // },
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
        // page: this.pageEvents,
      },
    });
  },
};
</script>