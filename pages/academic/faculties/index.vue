<template>
  <div class="ourTeam">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="ourTeam-left">           
            <div class="row">
              <div v-for="item in members" :key="item.id" class="col-4">
                <div class="block">
                  <div class="image">
                    <img :src="item.url" alt="" />
                  </div>
                  <div class="content">
                    <h2>{{item.title}}</h2>
                    <p>{{item.category_title}}</p>
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
    ...mapGetters("members", ['members'])
  },
  methods: {
    ...mapActions('members',['fetch'])
  },
  mounted() {
    this.fetch()
    // console.log(this.team);
  }
};
</script>
