<template>
  <div class="worker">
    <header class="worker__header">
      <p class="text worker__name">{{name}}</p>
      <div>
        <Button
          class="worker__button"
          color="blue"
          isSquare
          title="Редактировать"
          @click="$emit('edit-event', id)"
        ></Button>
        <Button
          class="worker__button"
          color="red"
          isSquare
          title="Удалить"
          @click="$emit('delete-event', id)"
        ></Button>
      </div>
    </header>
    <p class="text">Должность: {{position}}</p>
    <p class="text">{{`Email: ${email} | Телефон: ${phone}`}}</p>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Worker",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: String,
    position: String,
    email: String,
    phone: String,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.worker {
  background: #bbb;
  padding: 0.5em;
  border-radius: 0.15em;
  box-sizing: border-box;
}
.worker__header {
  display: flex;
  justify-content: space-between;
}
.worker__button {
  width: 1.7em;
  height: 1.7em;
}
.worker__button:not(:last-child) {
  margin-right: 0.3em;
}
.worker__name {
  font-weight: bold;
}
</style>