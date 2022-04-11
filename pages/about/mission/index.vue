<template>
  <div class="aboutUniversity">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="aboutUniversity-left">
            <div class="image">
              <div class="carousel-wrapper">
                <div v-swiper:mySwiper="options">
                  <div class="swiper-wrapper">
                    <div class="img-warpper swiper-slide">
                      <img :src="img" />
                    </div>
                  </div>
                  <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
                </div>
              </div>
            </div>

            <div class="content">
              <h2>Mission</h2>
              <p style="padding-top: 16px">
                A socially responsible institution that maximises the
                aspirations and potential of individuals and organizations
                through the provision of high quality and globally recognised
                programmes. A place of excellence in learning and living.
              </p>
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
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      img: require("~/assets/images/aboutUniversity.jpg"),
    };
  },
  mounted() {
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
  },
};
</script>
