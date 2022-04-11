<template>
  <div class="step2">
    <h2>Загрузите следующие документы:</h2>
    <div class="block">
      <h2>Цифровая фотография</h2>
      <div>
        <div class="input">
          <i class="icon-skript"></i>
          <input :disabled="isDisabled" @change="uploadFile($event, 1)" accept=".pdf" type="file" />
          <img src="../../assets/images/skript.png" alt="" />
        </div>
        <div class="content">
          <i class="icon-atten"></i>
          <div>
            <p>Требования</p>
            <span>{{ form.file1 && form.file1.name }}</span>
            <ul>
              <li>3х4 (на белом фоне) – формат jpeg, jpg, png</li>
              <li>Максимальный размер файла – до 2 мб.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <h2>Цифровая фотография</h2>
      <div>
        <div class="input">
          <i class="icon-skript"></i>
          <input :disabled="isDisabled" @change="uploadFile($event, 2)" accept=".pdf" type="file" />
          <img src="../../assets/images/skript.png" alt="" />
        </div>
        <div class="content">
          <i class="icon-atten"></i>
          <div>
            <p>Требования</p>
            <span>{{ form.file2 && form.file2.name }}</span>
            <ul>
              <li>
                (включая страницу с постоянным адресом проживания) – формат pdf.
                Максимальный размер файла – до 2 мб.
              </li>
              <!-- <li>Максимальный размер файла – до 2 мб.</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <h2>Цифровая фотография</h2>
      <div>
        <div class="input">
          <i class="icon-skript"></i>
          <input :disabled="isDisabled" @change="uploadFile($event, 3)" accept="image/*" type="file" />
          <img src="../../assets/images/skript.png" alt="" />
        </div>
        <div class="content" style="max-width: 586px;">
          <i class="icon-atten"></i>
          <div>
            <p>Требования</p>
            <span>{{ form.file3 && form.file3.name }}</span>
            <ul>
              <li>
                об общем среднем образовании, либо диплома о среднем
                специальном/профессиональном образовании и приложение с оценками
                (или письмо, подтверждающее окончание в этом году) - формат pdf.
                Максимальный размер файла – до 2 мб.
              </li>
              <!-- <li>Максимальный размер файла – до 2 мб.</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button v-if="!isDisabled" @click="$emit('next', {step: 3, form})" class="btnBlue">Next</button>
  </div>
</template>

<script>
export default {
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      },
      step: {
        type: Number,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        isDisabled: false,
        form: {
          file1: null,
          file2: null,
          file3: null
        }
      }
    },
    mounted() {
      this.isDisabled = (this.step == 3)
    },
    methods: {
      uploadFile(e, n) {
        n == 1 ? this.form.file1 = e.target.files[0] :
          n == 2 ? this.form.file2 = e.target.files[0] :
                   this.form.file3 = e.target.files[0]

      }
    }
}
</script>
