<template>
  <div class="aboutRector">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="aboutRector-left">
            <div class="top">
              <div class="image">
                <img :src="img" />
              </div>

              <div class="content">
                <h2>Dear Colleagues, Students, and Parents,</h2>
                <p>
                  Welcome to Management Development Institute of Singapore in
                  Tashkent.
                </p>
                <p>
                  MDIS Tashkent is the overseas campus of MDIS (Singapore),
                  established in accordance with the Presidential Decree No.
                  691, as of September 5, 2007. The Institute educates
                  holistically developed and skilled human resources, nurtures
                  highly motivated professionals in various spheres of economy
                  such as management, banking and finance, tourism, industrial
                  management, information technologies in business and etc.
                </p>
              </div>
            </div>
            <div class="bottom">
              <p>
                In relatively short period of time, our Institute made a
              significant breakthrough, including the Online Admission and
              Management System, augmentation of the number of students and
              programmes, MBA Programme and International ISO 9001:2015
              Certificate awarded by the International Organization for
              Standardization. The above achievements have become a testament to
              the institution’s unwavering dedication to provide its students
              with a world-class education and sustain the quality management
              standards. Our vision for Future MDIS Tashkent is an ambitious
              young University. We aim to maintain high-quality education and
              support to ensure every student has a good quality academic
              background to be able to contribute to the well-being and
              development of the country. In addition, we want to develop
              further infrastructure essential for a vibrant university
              community via investment into better quality equipment and
              deployment of the latest technologies for enhancing teaching and
              learning process. Also, MDIS Tashkent expands its campus through
              the construction of the new learning building. Also, we want MDIS
              Tashkent to be recognized among universities in Uzbekistan for
              research and knowledge transfer by increasing the number of
              academic staff researchers and ensuring the quality of their
              publicized works, by staff and students participation in different
              scientific events as well as by increasing the number of research
              projects. Finally, it is important to highlight a remarkable role
              of the Governing Council of MDIS and UBA, which contributed
              greatly to the establishment and formation of the Institute by
              recruiting a team of dedicated specialists and practitioners from
              diverse fields of management and science. Think success, think
              MDIS. Yours faithfully, Dr. J.Salikhov Rector
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
      img: require("~/assets/images/aboutRector.jpg"),
    };
  },
  mounted() {
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
  },
};
</script>
