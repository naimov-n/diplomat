<template>
  <div class="faculties">
    <div class="container">
      <div class="faculties-item pt-60 pb-60">
        <h2 class="themeH">Faculties</h2>
        <div class="row">
          <div class="col-6" data-aos="fade-right">
            <nuxt-link to="/static/bakalavr-it" class="block">
                <div class="image">
                    <img src="../../assets/images/faculties1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Bachelor of IT</h3>
                </div>
            </nuxt-link>
          </div>
          <div class="col-6" data-aos="fade-left">
            <nuxt-link to="static/bakalavr-ekonomika" class="block">
                <div class="image">
                    <img src="../../assets/images/faculties2.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Bachelor of Economics</h3>
                </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>