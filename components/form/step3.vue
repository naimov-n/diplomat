<template>
  <div class="step3">
    <Step1 :step="step" :info="info" />
    <Step2 :step="step" :info="info" />
    <!-- <div class="blockImg step2">
      <div class="block">
        <h2>Цифровая фотография</h2>
         <div class="input">
          <i class="icon-skript"></i>
          <input type="file" />
          <img src="../../assets/images/skript.png" alt="" />
        </div>
      </div>
       <div class="block">
        <h2>Отсканированная копия паспорта</h2>
         <div class="input">
          <i class="icon-skript"></i>
          <input type="file" />
          <img src="../../assets/images/skript.png" alt="" />
        </div>
      </div>
       <div class="block">
        <h2>Отсканированная копия аттестата </h2>
         <div class="input">
          <i class="icon-skript"></i>
          <input type="file" />
          <img src="../../assets/images/skript.png" alt="" />
        </div>
      </div>
    </div>
    <div class="text">
      <input type="checkbox" name="" id="" />
      <p>
        Об общем среднем образовании, либо диплома о среднем
        специальном/профессиональном образовании и приложение с оценками (или
        письмо, подтверждающее окончание в этом году)
      </p>
    </div> -->
    <button @click="$emit('next', {step: 4, form})" class="btnBlue">Next</button>
  </div>
</template>

<script>
import Step1 from "../../components/form/step1.vue";
import Step2 from "../../components/form/step2.vue";
export default {
  props: {
      step: {
        type: Number,
        default() {
          return false
        }
      },
      info: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  components: {
    Step1,
    Step2
  },
};
</script>
