(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.registerListeners();
    },
    cacheElements() {
      this.$btn = document.getElementById("btn");
      this.$box = document.getElementById("box");
    },
    registerListeners() {
      this.$btn.addEventListener("click", (e) => {
        if (this.$box.classList.contains("open")) {
          this.$box.classList.remove("open");
        } else {
          this.$box.classList.add("open");
        }
      });
    },
  };

  app.initialize();
})();
