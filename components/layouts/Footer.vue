<template>
  <div class="footer">
    <span></span>
    <div class="footerTop">
      <div class="container">
        <div class="row">
          <div class="col-3" style="flex: 1 0 22%; max-width: 22%">
            <div class="block blockLogo">
              <div class="logo">
                <img src="../../assets/images/footerLogo.png" alt="" />
              </div>
              <div>
                <p>Follow us</p>
                <ul>
              <li v-for="item in social" :key="item.id">
                <a :href="item.url"><i :class="`icon-${item.title}`"></i></a>
              </li>
            </ul>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="blockMenu">
              <ul>
                <li><nuxt-link to="/about"> About Us </nuxt-link></li>
                <li><nuxt-link to="/about"> Academic part </nuxt-link></li>
                <li><nuxt-link to="/about"> Reception </nuxt-link></li>
                <li><nuxt-link to="/about"> Life in Diplomat </nuxt-link></li>
                <li><nuxt-link to="/about"> Research </nuxt-link></li>
                <li><nuxt-link to="/about"> News and Events </nuxt-link></li>
                <li><nuxt-link to="/about"> Our contacts </nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="blockContact">
              <div>
                <p class="footerT">Address:</p>
                <p class="footerB">
                  <i class="icon-location"></i>
                  <span>
                    {{contacts.title}}
                  </span>
                </p>
              </div>
              <div>
                <p class="footerT">Contacts:</p>
                <a
                  :href="'tel:' + contacts.option_1"
                  class="footerB"
                  style="margin-bottom: 20px"
                >
                  <i class="icon-call"></i> {{ contacts.option_1 }}
                </a>
                <a :href="'mailto:' + contacts.short_content" class="footerB">
                  <i class="icon-email"></i> {{ contacts.short_content }}
                </a>
              </div>
              <div>
                <p class="footerT">Schedule:</p>
                <p class="footerB">
                  <i class="icon-clock" style="padding-top: 5px"></i>
                  {{ contacts.content }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-3" style="flex: 1 0 28%; max-width: 28%">
            <div class="blockContact">
              <p class="footerT">Subscribe & Get More Information</p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="email"
                />
                <div class="input-group-append">
                  <button :disabled="!isCorrectFilled" @click="subscribe" class="btnBlue" type="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBottom">
      <div
        class="container d-flex justify-content-between align-content-center"
      >
        <p>Copyright © Diplomat University 2022. All rights Reserved.</p>
        <p>
          Developed by:
          <a href="https://osg.uz/ru/" style="padding-left: 5px"
            >Online Service Group</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: ""
    };
  },
  computed: {
    ...mapGetters("contacts", ["contacts"]),
    ...mapGetters("social", ["social"]),
    isCorrectFilled() {
      return this.email.split("@").length == 2 && this.email.split(".").length >= 2
    }
  },
  methods: {
    ...mapActions("contacts", ["setContacts"]),
    ...mapActions("social", ["fetchSocial"]),
    async subscribe() {
      try {
        let res = await this.$axios.post("", this.form)
      } catch (e) {
        console.error(e)
      }
    }
  },
  mounted() {
    this.setContacts({
      params: {
        index: 2,
      },
    });
    this.fetchSocial();
  },
};
</script>
