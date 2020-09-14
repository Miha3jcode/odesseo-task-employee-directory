<template>
  <form class="form" @submit.prevent="submitHandler">
    <h3 class="header-text">Форма создания / редактирования сотрудника</h3>
    <InputField
      class="form__input-field"
      id="name"
      type="text"
      lable="Фамилия Имя"
      v-model.trim="name"
      :error="nameErrorText"
    />
    <InputField
      class="form__input-field"
      id="position"
      type="text"
      lable="Должность"
      v-model.trim="position"
      :error="positionErrorText"
    />
    <InputField
      class="form__input-field"
      id="email"
      lable="Email"
      v-model.trim="email"
      :error="emailErrorText"
    />
    <InputField
      class="form__input-field"
      id="phone"
      type="text"
      lable="Телефон"
      v-model.trim="phone"
      :error="phoneErrorText"
    />
    <Button class="form__button" type="submit">Сохранить</Button>
  </form>
</template>

<script>
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { email, required, minLength } from "vuelidate/lib/validators";
import { mustBeTwoWords, phoneCheck } from "@/utils/validators";

export default {
  name: "Form",
  props: { worker: Object },
  data() {
    return {
      email: this.worker ? this.worker.email : "",
      name: this.worker ? this.worker.name : "",
      position: this.worker ? this.worker.position : "",
      phone: this.worker ? this.worker.phone : "",
      id: this.worker ? this.worker.id : null,
      requiredErrorText: "Поле необходимо заполнить",
    };
  },
  validations: {
    email: { email, required },
    name: { required, mustBeTwoWords },
    position: { required, minLength: minLength(5) },
    phone: { required, phoneCheck },
  },
  computed: {
    positionErrorText() {
      if (this.$v.position.$dirty) {
        switch (false) {
          case this.$v.position.required:
            return this.requiredErrorText;
          case this.$v.position.minLength:
            return `Минимальная длина ${this.$v.position.$params.minLength.min} символов`;
          default:
            return "";
        }
      } else return "";
    },
    nameErrorText() {
      if (this.$v.name.$dirty) {
        switch (false) {
          case this.$v.name.required:
            return this.requiredErrorText;
          case this.$v.name.mustBeTwoWords:
            return "Должено состоять из двух слов";
          default:
            return "";
        }
      } else return "";
    },
    emailErrorText() {
      if (this.$v.email.$dirty) {
        switch (false) {
          case this.$v.email.required:
            return this.requiredErrorText;
          case this.$v.email.email:
            return "Email должен быть коректным";
          default:
            return "";
        }
      } else return "";
    },
    phoneErrorText() {
      if (this.$v.phone.$dirty) {
        switch (false) {
          case this.$v.phone.required:
            return this.requiredErrorText;
          case this.$v.phone.phoneCheck:
            return "Номер должен быть коректным";
          default:
            return "";
        }
      } else return "";
    },
  },
  watch: {
    worker: function (obj) {
      if (obj) {
        this.email = obj.email;
        this.name = obj.name;
        this.position = obj.position;
        this.phone = obj.phone;
        this.id = obj.id;
      }
    },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.$emit("createWorker", {
        email: this.email,
        name: this.name,
        position: this.position,
        phone: this.phone,
        id: this.id,
      });
      this.email = "";
      this.name = "";
      this.position = "";
      this.phone = "";
      this.id = null;
      this.$v.$reset();
    },
  },
  components: {
    Button,
    InputField,
  },
};
</script>

<style scoped>
.form {
  padding: 0.7em 1em 0.7em 1em;
  box-sizing: border-box;
  background-color: #ddd;
}
.form__input-field {
  margin-bottom: 0.8em;
}
.form__button {
  margin-top: 1em;
  width: 100%;
}
</style>