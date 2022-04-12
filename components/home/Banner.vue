<template>
  <div class="banner">
    <div class="bannerHead">
      <div class="bannerHead__top">
        <div class="container">
          <div class="left">
            <a :href="'tel:'+ contacts.option_1">
              <i class="icon-call"></i>
              {{contacts.option_1}}
            </a>            
            <ul>
              <li v-for="item in social" :key="item.id">
                <a :href="item.url"><i :class="`icon-${item.title}`"></i></a>
              </li>              
            </ul>
          </div>
          <div class="right">
            <a href="/form"> Apply Now </a>
            <div class="search">
              <a href="">
                <i class="icon-search"></i>
              </a>
            </div>
            <div class="language">
              <div class="btn-group">
                <button
                  type="button"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  En
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Uz</button>
                  <button class="dropdown-item" type="button">Ru</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bannerHead__menu">
        <div class="container">
          <a href="" class="logo">
            <img src="../../assets/images/headerLogo.png" alt="" />
          </a>
          <div class="menu">
            <i class="icon-tuit"></i>            
                <div class="header-men">
                   <HomeRecursiveMenu v-for="(item) in list" :key="item.id" :menu="item" />
                </div>               
          </div>
          <div class="fullmenu" style="display: none">
            <i class="icon-barsMenu"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bannerBody">
      <div class="container">
        <div data-aos="fade-right">            
          <!-- <p>{{textBanner.short_content}}</p>
          <h2>{{textBanner.title}}</h2>
          <p>
            {{textBanner.content}}
          </p> -->
        </div>
      </div>
    </div>
    <div class="bannerFooter">
      <div class="container">
        <div v-swiper:mySwiper="options">
          <div class="swiper-wrapper">
            <div class="img-warpper swiper-slide">
              <div class="newsBlock">
                <div class="image">
                  <img src="../../assets/images/bannerNews.jpg" alt="" />
                </div>
                <div>
                  <span>
                    <h2>College Advisory</h2>
                    <p>
                      Pursue your education without financial worry. At Arizona,
                      you’ll find a variety of options from
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="img-warpper swiper-slide">
              <div class="newsBlock">
                <div class="image">
                  <img src="../../assets/images/bannerNews.jpg" alt="" />
                </div>
                <div>
                  <span>
                    <h2>College Advisory</h2>
                    <p>
                      Pursue your education without financial worry. At Arizona,
                      you’ll find a variety of options from
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="img-warpper swiper-slide">
              <div class="newsBlock">
                <div class="image">
                  <img src="../../assets/images/bannerNews.jpg" alt="" />
                </div>
                <div>
                  <span>
                    <h2>College Advisory</h2>
                    <p>
                      Pursue your education without financial worry. At Arizona,
                      you’ll find a variety of options from
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="img-warpper swiper-slide">
              <div class="newsBlock">
                <div class="image">
                  <img src="../../assets/images/bannerNews.jpg" alt="" />
                </div>
                <div>
                  <span>
                    <h2>College Advisory</h2>
                    <p>
                      Pursue your education without financial worry. At Arizona,
                      you’ll find a variety of options from
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="img-warpper swiper-slide">
              <div class="newsBlock">
                <div class="image">
                  <img src="../../assets/images/bannerNews.jpg" alt="" />
                </div>
                <div>
                  <span>
                    <h2>College Advisory</h2>
                    <p>
                      Pursue your education without financial worry. At Arizona,
                      you’ll find a variety of options from
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="img-warpper swiper-slide">
              <div class="newsBlock">
                <div class="image">
                  <img src="../../assets/images/bannerNews.jpg" alt="" />
                </div>
                <div>
                  <span>
                    <h2>New Git Hub</h2>
                    <p>
                      Pursue your education without financial worry. At Arizona,
                      you’ll find a variety of options from
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
       
        </div>      
      </div>
    </div>
    <div class="bannerBack"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      options: {
        slidesPerView: 4,
        // dots: true,
        loop: true,
        // arrows: false,
        mobileFirst: true,
        infinite: false,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapGetters("menu", ["list"]),
    ...mapGetters("contacts", ["contacts"]),
    ...mapGetters("social", ["social"]),
    // ...mapGetters("textBanner", ["textBanner"]),   

  },
  methods: {
    ...mapActions("menu", ["fetch"]),
    ...mapActions("contacts", ["fetchContacts"]),
    ...mapActions("social", ["fetchSocial"]),
    // ...mapActions("textBanner", ["textBanner"]),
  },
  async mounted() {
    this.fetch();
    this.fetchContacts({
      params:{
        index: 2,  
      }
    }); 
    this.fetchSocial();
    // await this.textBanner({
    //   params: {
    //     index: 56
    //   }
    // }); 
    console.log(this.social[0])
  },
};
</script>

<style scoped>
.header-men {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
}
</style>