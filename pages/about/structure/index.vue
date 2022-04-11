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
              <h2>
                Management Development Institute of Singapore in Tashkent was
                established in 2007 by Uzbekistan Banking Association (UBA) and
                the Management Development Institute of Singapore (MDIS). Its
                permanent partners providing educational programmes - the Bangor
                University (UK) and Sunderland University (UK) are known as
                leading British universities placed in the Top 1000 World
                University Rankings. In addition, in the 2020 MDIS Tashkent
                signed a partnership agreement with a new UK partner - Teesside
                University.
              </h2>
              <p style="padding-top: 16px">
                MDIS Tashkent is a joint venture educational establishment
                offering internationally recognized degrees by preserving
                national traditions and holistic approach to nurturing future of
                the nation. The shareholders of MDIS Tashkent are Management
                Development Institute of Singapore Pte Ltd and Uzbekistan
                Banking Association owning 51% and 49% respectively. Board of
                Directors is comprised of 5 members appointed by respective
                organizations. At present, the Board is chaired by Dr Bakhtiyar
                Khamidov, General Director of Uzbekistan Banking
                Association.Board convenes annually to discuss strategic matters
                and future of operations, plans and budget of the Management
                Development Institute of Singapore in Tashkent.
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
      img: require("~/assets/images/aboutStructure.jpg"),
    };
  },
  mounted() {
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
  },
};
</script>
