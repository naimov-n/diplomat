<template>
  <div class="OurPartners">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="OurPartners-item">
            <div class="row">
              <div v-for="(item, index) in partners" :key="index" class="col-4">
                <div class="block">
                  <nuxt-link :to="`/about/partners/${item.slug}`">
                    <div class="image">
                      <img :src="item.url   " alt="" />
                    </div>
                    <div class="content">
                      <div class="logo">
                        <img :src="item.logo" alt="404" />
                      </div>
                      <h3>{{item.title}}</h3>
                    </div>
                  </nuxt-link>
                </div>
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
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters("partners", ['partners'])
  },
  methods: {
    ...mapActions('partners',['fetch'])
  },
  mounted() {
    this.fetch()
  }
};
</script>