<template>
  <div class="new">
    <h1>hehe</h1>
    <button @click="handleData">click here</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { data } from "@/constants/contant.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    this.getData(data);
  },
  computed: {
    ...mapGetters(["listRoom"]),
  },
  methods: {
    ...mapActions(["getData"]),
    handleData() {
      console.log(this.listRoom);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
