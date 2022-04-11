<template>
  <div class="clubs aboutUniversity">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="aboutUniversity-left">
              <div class="clubs-blocks">
                <div class="row">
                  <div v-for="item in clubs" :key="item.id" class="col-4">
                    <div class="block">
                      <div class="image">                        
                        <img :src="item.url" alt="">
                      </div>
                      <div class="content">
                        <h2>
                          {{item.title}}
                        </h2>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
          </div>
        </div>
        <div class="col-3">
           <aboutSidebar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("clubs", ['clubs']),
  },
  methods: {
    ...mapActions('clubs',['fetch'])
  },
  async mounted() {
   await this.fetch()
  //  console.log(this.clubs)
  }
};
</script>
