<template>
  <div class="newsPage">
    <div class="container">
      <div class="newsPage-item">
        <div class="buttons">
          <button :class="tabs == 1 ? 'btnBlue' : 'btnWhite'" @click="changeNews()">News</button>
          <button :class="tabs == 2 ? 'btnBlue' : 'btnWhite'" @click="changeEvents()">Events</button>
        </div>
        <div class="contents">
          <div v-if="tabs == 1" class="news">
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
            <button v-if="news.length < count" @click="newsAll()" class="btnBlue" style="border: 0; margin: auto;" >Load more</button>
          </div>
          <div v-if="tabs == 2" class="events">
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
                        <nuxt-link :to="`/events/${item.slug}`" class="btnWhite"> View more </nuxt-link>
                    </div>
                </div>               
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      tabs: 1,
      limit: 11,
      page: 1,
      limitEvents: 5,
      pageEvents: 1
    };
  },
  computed: {
    ...mapGetters("news", ["news", "count"]),
    ...mapGetters("events", ["events", "count"]),
  },
  methods: {
    ...mapActions("news", ["fetch"]),
    ...mapActions("events", ["fetchEvents"]),
    ...mapMutations("news", ["setList"]),

    changeNews: function () {
      this.tabs = 1;
    },

    changeEvents: function () {
      this.tabs = 2;
    },

    newsAll: function() {        
        this.page++;
        this.fetch({
            params: {
                limit: this.limit,
                page: this.page,                
            },
        });
    },
  },
  mounted() {
    this.setList({refresh: true, payload: []})
    this.fetch({
      params: {
        limit: this.limit,
        page: this.page,
      },
    });
    this.fetchEvents({
      params: {
        limit: this.limitEvents,
        page: this.pageEvents,
      },
    });
  },
};
</script>
