<template>
  <div class="app">
    <Form class="app__form" :worker="workerForEditing" @createWorker="addWorker"></Form>
    <WorkersList
      class="app__workers-list"
      :workers="getAllWorkers"
      @edit-event="editWorker"
      @delete-event="deleteWorker"
    />
  </div>
</template>

<script>
import Form from "@/components/Form";
import WorkersList from "@/components/WorkersList";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      workerForEditing: null,
    };
  },
  computed: mapGetters(["getAllWorkers", "getWorkerById"]),
  methods: {
    ...mapMutations(["createWorker", "updateWorker", "deleteWorker"]),
    addWorker(data) {
      this.workerForEditing = null;
      if (data.id || data.id === 0) {
        this.updateWorker(data);
      } else {
        this.createWorker(data);
      }
    },
    editWorker(id) {
      this.workerForEditing = this.getWorkerById(id);
    },
  },
  components: {
    Form,
    WorkersList,
  },
};
</script>

<style >
body {
  margin: 0;
  min-width: 320px;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  max-width: 100em;
  margin: 0 auto;
  display: flex;
}
.app__form {
  align-self: center;
  width: 30%;
  min-width: 320px;
  max-width: 640px;
  margin-right: 1em;
  margin-left: 1em;
}
.app__workers-list {
  width: 70%;
  margin: 1em 1em 1em 0;
}

@media (max-width: 810px) {
  .app {
    display: block;
    height: auto;
    min-height: 100vh;
  }
  .app__form {
    width: 100%;
    margin: 0 auto;
  }
  .app__workers-list {
    overflow-y: auto;
    width: 100%;
  }
}

.header-text {
  margin: 0;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 0.8em;
}
.text {
  margin: 0;
  font-size: 1em;
  margin-bottom: 0.2em;
}
</style>