<template>
    <div id="app" class="aanmelden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <header class="header">
        <h1 class="header-title">Aanmelden</h1>
      </header>
      <main>
        <div class="content-box">
          <section class="step">
            <div class="icon">
              <img src="/src/assets/sanquin-pelican-white.png" height="81px" alt="Sanquin pelicaan logo in het wit" />
            </div>
            <h2>Ook jij kunt <br /> levens redden.</h2>
            <p>
              Als donor redt je per donatie
maximaal drie levens.
Niet slecht, toch?
Wil jij bijdragen aan een
betere, gezondere wereld?

Meld je aan als donor en
doe mee!
            </p>
            <button class="register-button">
      <a href="https://www.sanquin.nl/aanmelden-donor/stap-1" target="_blank" class="register-button">
        Aanmelden
      </a>
    </button>  
          </section>
        </div>
      </main>
      <footer class="navinstructions">
        <img class="left-icon" src="/src/assets/backward.png" height="100px" alt="Pijl die naar links wijst" />
        <h1>swipe door de stappen</h1>
        <img class="right-icon" src="/src/assets/forward.png" height="100px" alt="Pijl die naar rechts wijst" />
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
  
 
        if (deltaX < -50) {
          // If swipe left to right, go back
          this.$router.back();
        }
      },
    },
  };
  </script>
  
  <style scoped>

  
  </style>