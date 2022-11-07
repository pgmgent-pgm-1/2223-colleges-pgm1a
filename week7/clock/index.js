(() => {
  const START_YEAR = 1663569900000;
  const END_YEAR = 1695019500000;

  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$countDown = document.getElementById("countdown");
      this.$countUp = document.getElementById("countup");
    },
    buildUI() {
      this.generateHTMLForClocks();
      setInterval(() => {
        this.generateHTMLForClocks();
      }, 1000);
    },
    getTimeDifference(from, to) {
      let diff = Math.abs(from - to);
      const day = 1000 * 60 * 60 * 24;
      const hour = 1000 * 60 * 60;

      const days = Math.floor(diff / day);
      diff -= day * days;
      // hours
      // minuten
      // seconden

      return `${days}days 10h 32m 10s`;
    },
    generateHTMLForClocks() {
      this.$countDown.innerHTML = this.getTimeDifference(
        new Date().getTime(),
        START_YEAR
      );
      this.$countUp.innerHTML = this.getTimeDifference(
        new Date().getTime(),
        END_YEAR
      );
    },
  };

  app.initialize();
})();
