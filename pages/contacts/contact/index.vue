<template>
  <div class="contact">
    <div class="container">
      <div class="contact-item">
        <div class="contact-item__top">
          <div class="cart" v-html="contacts && contacts.content_html">
            {{contacts && contacts.content_html}}
          </div>
          <div class="content">
            <ul>
              <li>
                <p>Address:</p>
                <p>
                  {{contacts && contacts.title}}
                </p>
              </li>
              <li>
                <p>Email:</p>
                <p><a :href="'mailto:' + contacts && contacts.short_content"> {{contacts && contacts.short_content}} </a></p>
              </li>
              <li>
                <p>Телефон:</p>
                <p><a :href="'tel'+ contacts && contacts.option_1">  {{contacts && contacts.option_1}} </a></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="contact-item__body">
          <div class="text">
            <p v-html="content.title">

            </p>
            <p  v-html="content.content_html">

            </p>
          </div>

          <div v-html="content.short_content" class="table">
            <!-- <table>
              <thead>
                <tr>
                  <td>Service</td>
                  <td>Email</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Academic affairs</td>
                  <td>academicaffairsdiplomatuniversity.org</td>
                </tr>
                <tr>
                  <td>Academic affairs</td>
                  <td>academicaffairsdiplomatuniversity.org</td>
                </tr>
                <tr>
                  <td>Academic affairs</td>
                  <td>academicaffairsdiplomatuniversity.org</td>
                </tr>
              </tbody>
            </table> -->
          </div>
        </div>
        <div class="contact-item__bottom">
          <div class="left">
            <h2>Form for direct letter</h2>
            <form action="">
              <label for="">
                <input v-model="form.name" type="text" placeholder="Name" />
              </label>
              <label for="">
                <input v-model="form.phone" type="text" placeholder="Phone" />
              </label>
              <label for="">
                <input v-model="form.email" type="text" placeholder="Email the address" />
              </label>
            </form>
          </div>
          <div class="right">
            <textarea name=""  v-model="form.description" id="" placeholder="Type here"></textarea>
            <div>
                <div>
                  <input v-model="isAgree" type="checkbox" />
                  <span>
                    Я согласен с условиями обработки персональных данных
                  </span>
                </div>
                <button :disabled="!formFilled" @click.prevent="sendForm" type="submit" class="btnBlue">
                    Send
                </button>
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
  data() {
    return {
      img: "",
      isAgree: false,
      form: {
        name: "",
        phone: "",
        email: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapGetters("contacts", ["content", "contacts"]),
    formFilled() {
      return this.form.name && this.form.phone && this.form.email && this.form.description && this.isAgree
    }
    // content() {
    //   return this.$store.getters("setting/content")
    // },
    // contacts() {
    //   return this.$store.getters("setting/contacts")
    // }
  },
  methods: {
    ...mapActions("contacts", ["fetchContacts", "fetchContent"]),
    async sendForm() {
      try {
        let res = await this.$axios.post("", this.form)
      } catch (e) {
        console.error(e)
      }
    }
  },
  async mounted() {
    await this.fetchContacts({
      params: {
        index: 2
      }
    });
    await this.fetchContent({
      params: {
        index: 50
      }
    });
  },
};
</script>
