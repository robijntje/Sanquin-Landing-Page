<template>
  <div id="app" class="aanmelden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <header class="header">
      <h1 class="header-title">Aanmelden</h1>
    </header>
    <main>
      <div class="content-box">
        <section class="step">
          <div class="icon">
            <img src="/src/assets/become-donor-welcome.png" height="81px" alt="Welkom" />
          </div>
          <h2>Welkom bij <br /> de club.</h2>
          <p>
            Wat fijn dat je wilt doneren. 
Met jouw bloed of plasma 
redden we levens en 
ontwikkelen we medicijnen. 
Met dit stappenplan kun jij 
ons helpen om levens 
te redden.

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
        this.$router.push("/informatie/hoemeldikmeaan/stap1");
      }
    },
  },
};
</script>

<style scoped>


</style>