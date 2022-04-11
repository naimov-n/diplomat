<template>
    <div class="contactUs pt-80" :style="`background-image: url(${img})`">
        <div class="container">
            <div class="contactUs-item" data-aos="fade-up">
                <p v-html="contactUs.short_content" >{{contactUs.short_content}}</p>
                <h2 v-html="contactUs.title">
                    {{contactUs.title}}
                </h2>
                <p v-html="contactUs.content">
                    {{contactUs.content}}
                </p>
                <nuxt-link to="/contacts/contact" class="btnBlue">Contact us</nuxt-link>
            </div>
        </div>
        <div class="back"></div>
    </div>    
</template>

<script>
import { mapActions, mapGetters } from "vuex"; 
export default {
  data() {
    return {
      img: ""
    };
  },
  computed: {
    ...mapGetters("contactUs", ["contactUs"]),   
  },
  methods: {
    ...mapActions("contactUs", ["fetchContacts"]),
  },
  async mounted() {
    await this.fetchContacts({
      params: {
        index: 59
      }
    });   
    this.img = this.contactUs.img;
    
  },
};
</script>