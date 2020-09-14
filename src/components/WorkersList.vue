<template>
  <div class="workers-list">
    <h3 class="header-text workers-list__header-text">Список сотрудников</h3>
    <Worker
      class="workers-list__worker"
      v-for="worker in workers"
      :key="worker.id"
      :id="worker.id"
      :name="worker.name"
      :position="worker.position"
      :email="worker.email"
      :phone="worker.phone"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Worker from "./Worker";

export default {
  name: "WorkersList",
  props: {
    workers: {
      type: Array,
      required: true,
    },
  },
  components: {
    Worker,
  },
};
</script>

<style scoped>
.workers-list {
  background-color: #ddd;
  padding: 0.7em 0;
}
.workers-list__header-text {
  margin-left: 1em;
}
.workers-list__worker {
  max-width: calc(100% - 2em);
  margin: 0 auto 0.6em auto;
}
</style>