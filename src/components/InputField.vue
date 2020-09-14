<template>
  <div :class="['input-container' , {'input-container_with-error': isErrorVisible}]">
    <label class="text lable" :for="id" v-if="lable">{{lable}}</label>
    <input
      :class="['input', 'input-container__input', {'input_backlight_error':isErrorVisible}]"
      :id="id"
      :type="type"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
    <p class="input-container__error">{{errorText}}</p>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    lable: String,
    error: String,
  },
  data: function () {
    return {
      errorText: this.error,
    };
  },
  computed: {
    isErrorVisible: function () {
      return this.error;
    },
  },
  watch: {
    error: function (val) {
      if (val) this.errorText = val;
    },
  },
};
</script>

<style scoped>
.input {
  font-size: 1em;
  line-height: 2.3;
  outline: 0;
  padding: 0.15em 0.7em 0.15em 0.7em;
  border: none;
  border-radius: 0.15em;
  box-sizing: border-box;
  transition: border 0.3s ease-in-out;
}
.input_backlight_error {
  padding: 0 0.7em 0 0.7em;
  border: 0.15em solid rgb(243, 75, 75);
}

.lable {
  cursor: pointer;
}

.input-container {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: padding 0.3s ease-in-out;
}
.input-container_with-error {
  padding-bottom: 1.3em;
}
.input-container__lable {
  margin-bottom: 0.2em;
}
.input-container__input {
  z-index: 1;
}
.input-container__error {
  position: absolute;
  bottom: 0px;
  margin: 0;
  z-index: 0;
  color: rgb(243, 75, 75);
}
</style>