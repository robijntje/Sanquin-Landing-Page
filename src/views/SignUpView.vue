<template>
  <div id="app" class="aanmelden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <header class="header">
      <h1 class="header-title">Aanmelden</h1>
    </header>
    <main>
      <div class="content-box">
        <section class="step">
          <div class="icon">
            <img src="/src/assets/heart-new-red.png" height="100px" alt="Stap 1" />
          </div>
          <h2>Je meld je <br /> aan.</h2>
          <p>
            Start met aanmelden door naar de aanmeldpagina te gaan. Je doorloopt een
            medische vragenlijst en maakt een afspraak bij jou in de buurt.
          </p>
          <button class="register-button">Aanmelden</button>

        </section>
      </div>
    </main>
    <footer class="navinstructions">
      <img class="left-icon" src="/src/assets/backward.png" height="100px" alt="Achteruit" />
      <h1>swipe door de stappen</h1>
      <img class="right-icon" src="/src/assets/forward.png" height="100px" alt="Vooruit" />
    </footer>

  </div>

</template>

<script>
export default {
  data() {
    return {
      startX: 0,
      endX: 0,
    };
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX; // Checks start X position of touch gesture
    },
    handleTouchEnd(event) {
      this.endX = event.changedTouches[0].clientX; // Checks end x postion of touch gesture
      const deltaX = this.startX - this.endX;

      if (deltaX > 50) {
        // If swipe more than 50px to left, go to next page
        this.$router.push("/informatie");
      } else if (deltaX < -50) {
        // If swipe left to right, go back
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped>
.navinstructions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navinstructions .left-icon {
  height: 100px;
  flex-shrink: 0;
}

.navinstructions .right-icon {
  height: 100px;
  flex-shrink: 0;
}

.navinstructions h1 {
  font-size: 20px;
  margin: 0;
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

</style>