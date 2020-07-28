let app = new Vue({
  el: "#app",
  data: {
    username: "jmk2142",
    hobbies: ["cooking","coding","karate"]
  },
  methods: {
    doIt() {
      alert(this.username);
    }
  }
});
