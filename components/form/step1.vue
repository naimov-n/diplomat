<template>
    <div>
         <form action="">
          <div class="top">
            <div class="left">
              <label for="">
                <h2>Программа</h2>
                <select  :disabled="isDisabled" v-model="form.programm" name="" id="" class="formInput">
                  <option v-for="p in programmList" :key="p.value" :value="p.value">{{ p.title.ru }}</option>
                </select>
              </label>
              <label v-if="form.programm == 1" for="">
                <h2>Форма обучения</h2>
                <select  :disabled="isDisabled" v-model="form.form" name="" id="" class="formInput">
                  <option v-for="f in formList" :key="f.value" :value="f.value">{{ f.title.ru }}</option>
                </select>
              </label>
              <label for="">
                <h2>Факультет</h2>
                <select  :disabled="isDisabled" v-model="form.faculty" name="" id="" class="formInput">
                  <option v-for="f in facultyList" :key="f.value" :value="f.value">{{ f.title.ru }}</option>
                </select>
              </label>
            </div>
            <div v-if="form.programm == 4" class="right">
              <p>
                Об общем среднем образовании, либо диплома о среднем
                специальном/профессиональном образовании и приложение с оценками
                (или письмо, подтверждающее окончание в этом году)
              </p>
              <div class="block">
                <h2>Application number</h2>
                <input type="text" class="formInput" />
                <div>
                  <h3>Abduyaminov Akmal</h3>
                  <ul>
                      <li>Aprowed</li>
                      <li>Aprowed</li>
                      <li>Aprowed</li>
                  </ul>
                  <button class="btnBlue"> Check </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <h2>Заполните форму:</h2>
            <div>
              <div class="left">
                <label for="">
                  <p>Ф.И.О.</p>
                  <input :disabled="isDisabled" v-model="form.fio" type="text" placeholder="Ф.И.О." class="formInput" />
                </label>
                <label for="">
                  <p>Серия и номер паспорта</p>
                  <input
                   :disabled="isDisabled"
                  v-model="form.passport"
                    type="text"
                    placeholder="Серия и номер паспорта"
                    class="formInput"
                  />
                </label>
                <label for="">
                  <p>Номер телефона</p>
                  <input
                   :disabled="isDisabled"
                  v-model="form.phone"
                    type="text"
                    placeholder="Номер телефона"
                    class="formInput"
                  />
                </label>
                <label for="">
                  <p>E-mail</p>
                  <input  :disabled="isDisabled" v-model="form.email" type="text" placeholder="E-mail" class="formInput" />
                </label>
              </div>
              <div class="right">
                <label for="">
                  <p>Пол</p>
                  <select  :disabled="isDisabled" v-model="form.gender" name="" id="" class="formInput">
                    <option v-for="g in genderList" :key="g.value" :value="g.value">{{g.title.ru }}</option>
                  </select>
                </label>
                <label for="">
                  <p>Место жительства</p>
                  <input
                   :disabled="isDisabled"
                  v-model="form.birth_place"
                    type="text"
                    placeholder="Место жительства"
                    class="formInput"
                  />
                </label>
                <label for="">
                  <p>Номер телефона (зарегестрированный в Telegram)</p>
                  <input
                   :disabled="isDisabled"
                  v-model="form.tg_phone"
                    type="text"
                    placeholder="Номер телефона (зарегестрированный в Telegram)"
                    class="formInput"
                  />
                </label>
              </div>
            </div>
          </div>  
        </form>
        <button v-if="!isDisabled" @click="$emit('next', {step: 2, form})" class="btnBlue">Next</button>       
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
          return 1
        }
      }
    },
    data() {
      return {
        isDisabled: false,
        formList: [
          {
            title: {
              ru: "Очный"
            },
            value: 1
          },
          {
            title: {
              ru: "Заочный"
            },
            value: 2
          },
        ],
        programmList: [
          {
            title: {
              ru: "Бакалавр"
            },
            value: 1
          },
          {
            title: {
              ru: "Magistratura"
            },
            value: 2
          },
          {
            title: {
              ru: "Перевод"
            },
            value: 3
          },
          {
            title: {
              ru: "Intertational students"
            },
            value: 4
          },
        ],
        facultyList: [
          {
            title: {
              ru: "Экономика"
            },
            value: 1
          },
          {
            title: {
              ru: "Magistratura"
            },
            value: 2
          },
        ],
        genderList: [
          {
            value: 1,
            title:{
              ru: "Male"
            }
          },
          {
            value: 2,
            title:{
              ru: "Female"
            }
          }
        ],
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
          tg_phone: ""
          
        }
      }
    },
    mounted() {
        Object.keys(this.form).forEach(key => {
          this.form[key] = this.info[key]
        })
        
      this.isDisabled = (this.step == 3)
    
    }
}
</script>
