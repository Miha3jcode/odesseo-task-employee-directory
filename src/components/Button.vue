<template>
  <button
    :class="['button', {button_color_green: color=='green', button_color_blue:color=='blue', button_color_red:color=='red', button_square:isSquare}]"
    v-on:click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: "green",
    },
    isSquare: Boolean,
  },
};
</script>

<style scoped>
.button {
  border: none;
  user-select: none;
  padding: 0 1em 0 1em;
  font-size: 1em;
  line-height: 2;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 0.15em;
}
.button_color_green {
  background: rgb(67, 185, 67);
}
.button_color_blue {
  background: rgb(123, 114, 255);
}
.button_color_red {
  background: rgb(245, 89, 89);
}
.button_square {
  padding: 0;
}
</style>