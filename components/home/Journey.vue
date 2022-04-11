<template>
  <div class="journey">
    <div class="container">
      <div class="journey-item pt-60 pb-60">
        <div class="journey-item__left">
          <div class="journey-item__left__top">
            <p class="themeP">TO THE JOURNEY AHEAD</p>
            <h2 class="themeH">Gain valuable Knowledga & Experience</h2>            
          </div>
          <div class="journey-item__left__bottom">
            <ul>
              <li data-aos="fade-up">
                <span><i class="icon-tuit"></i></span>
                <span>
                  <h2>University Life</h2>
                  <p>
                    At Eller, our forward-looking approach gives students
                    confidence to lead in the face of profound technical, social
                    and economic change.
                  </p>
                </span>
              </li>
              <li data-aos="fade-up">
                <span><i class="icon-laptop" ></i></span>
                <span>
                  <h2>Online Education</h2>
                  <p>
                    We collaborate without boundaries and create innovations
                    that improve the world. Here, students become leaders. Ideas
                    become best practices.
                  </p>
                </span>
              </li>
              <li data-aos="fade-up">
                <span><i class="icon-people"></i></span>
                <span>
                  <h2>Campus Tours</h2>
                  <p>
                    Concepts become thriving businesses. Given our fearless
                    spirit, it’s no wonder we often appear near the top in
                    international rankings.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="journey-item__right">
          <div class="left" data-aos="fade-up">
            <div class="leftTop">
              <div>
                <h2>{{journey1.title}}</h2>
                <p v-html="journey1.short_content">
                 {{journey1.short_content}}
                </p>
              </div>
            </div>
            <div class="image">
              <div class="image">
                <img :src="journey1.img" alt="" />
              </div>
            </div>
          </div>
          <div class="right" data-aos="fade-down">
            <div class="image">
              <img :src="journey2.img" alt="" />
            </div>
            <div class="rightBottom">
              <div>
                <h2>{{journey2.title}}</h2>
                <p v-html="journey2.short_content">
                  {{journey2.short_content}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default { 
  computed: {
    ...mapGetters("journey", [ "journey1", "journey2"]),  
  },
  methods: {
    ...mapActions("journey", ["fetchJourney1", "fetchJourney2"]),
  },
  async mounted() {
    await this.fetchJourney1({
      params: {
        index: 57
      }
    });  
    await this.fetchJourney2({
      params: {
        index: 58
      }
    });  
  },
};
</script>