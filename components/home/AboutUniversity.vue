<template>
  <div class="about">
    <div class="container">
      <div class="about-item pt-120 pb-60">
        <div class="about-item__left">
          <div class="image1" data-aos="fade-right" data-aos-duration="150">
            <img src="../../assets/images/aboutImg.jpg" alt="" />
            <span
              ><nuxt-link to="/">
                View all faculties <i class="icon-right1"></i> </nuxt-link
            ></span>
          </div>
          <div class="image2" data-aos="fade-up" data-aos-duration="300">
            <a href="https://www.youtube.com/watch?v=CBbEPLgIQ4U">
              <img src="../../assets/images/aboutVideoImg.jpg" alt="" />
              <div class="play"><i class="icon-play"></i></div>
            </a>
          </div>
        </div>
        <div class="about-item__right" data-aos="fade-left" data-aos-duration="450">
          <div class="about-item__right__top">
            <p>WHY CHOOSE US</p>
            <h2>Why Diplomat University</h2>
            <p>
              As Diplomat’s land-grant university, we are driven to do great
              things. It’s our passion to transform the lives of our student
              Wildcats and to solve some of the biggest challenges facing our
              state and the world.
            </p>
          </div>
          <ul>
            <span>
              <li><i class="icon-check"></i> Graduate Programs</li>
              <li><i class="icon-check"></i> Undergraduate Programs</li>
              <li><i class="icon-check"></i> Doctoral Degrees</li>
            </span>
            <span>
              <li><i class="icon-check"></i> International Hubs</li>
              <li><i class="icon-check"></i> Alumni & Giving</li>
              <li><i class="icon-check"></i> Global Students</li>
            </span>
          </ul>
          <div class="about-item__right__bottom">
            <div>
              <div>
                <h2 style="max-width: 90px">76 <i class="icon-plus"></i></h2>
                <p>Years Of Experience</p>
              </div>
              <div>
                <h2>25K <i class="icon-plus"></i></h2>
                <p>Global Students</p>
              </div>
            </div>
            <nuxt-link to="static/aboutuniversity" class="btnBlue">READ MORE</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

