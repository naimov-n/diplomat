<template>
  <div class="form">
    <div class="container">
      <div class="form-item">
       <Step1 v-if="step == 1" @next="next" :info="form" :step="step"/>
       <Step2 v-else-if="step == 2" @next="next" :info="form" :step="step"/>
       <Step3 v-else-if="step == 3"  @next="next" :info="form" :step="step"/>
         <!-- <button class="btnBlue">Next</button> -->
          <div class="step">
            <div class="line">
              <div></div>
              <button :disabled="!step1Filled" @click="step = 1"><i class="icon-right1"></i></button>
              <button :disabled="!step2Filled" @click="step = 2"><i class="icon-right1"></i></button>
              <button :disabled="!step3Filled" @click="step = 3"><i class="icon-right1"></i></button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

import Step1 from '../../components/form/step1.vue'
import Step2 from '../../components/form/step2.vue'
import Step3 from '../../components/form/step3.vue'
export default {
    components: {
        Step1,
        Step2,
        Step3
    },
    data() {
      return {
        step1Filled: false,
        step2Filled: false,
        step3Filled: false,
        step: 1,
        form: {
          form: 1,
          programm: 1,
          faculty: 1,
          // personal data
          fio: "",
          gender: 1,
          passport: "",
          phone: "",
          email: "",
          birth_place: "",
          tg_phone: "",
          file1: null,
          file2: null,
          file3: null
        }
      }
    },
    methods: {
      ...mapActions("form", ["apply"]),
      next({step, form}) {
        if (step != 4) {
          this.step = step
          this.form = {
            ...this.form,
            ...form
          }
        } else {
          this.apply(this.form)
        }
      }
    }
}
</script>

<style>
.form-item .step .line > div:first-child {
  width: 26%;
  height: 10px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #2d6cb1;
}
</style>