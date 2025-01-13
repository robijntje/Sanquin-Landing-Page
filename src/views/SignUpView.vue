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
          <h2>Je meld je aan.</h2>
          <p>
            Start met aanmelden door naar de aanmeldpagina te gaan. Je doorloopt een
            medische vragenlijst en maakt een afspraak bij jou in de buurt.
          </p>
          <button class="register-button">Aanmelden</button>

        </section>
      </div>
    </main>

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
        // If swipe more than 50px, to to next page
        this.$router.push("Informatie");
      }
    },
  },
};
</script>

<style scoped>

.aanmelden {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-box {
  background-color: black;
  padding: 16px;
  margin: 0 16px;
}

.header {
  display: flex;
  align-items: center;
  color: white;
  padding: 16px;
  margin-top: 30px;
}

.header-title {
  font-size: 20px;
  margin-left: 40px;
}

h1 {
  font-size: 20px;
  margin: 0;
}

.register-button {
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  display: flex;
  justify-content: center;
}

.step h2 {
  font-size: 48px;
  color: white;
  font-weight: 800;
}

.step p {
  font-size: 20px;
  margin-bottom: 16px;
  color: white;
}
</style>