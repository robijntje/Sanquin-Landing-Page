<template>
    <div id="app" class="aanmelden" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <header class="header">
        <h1 class="header-title">Aanmelden</h1>
      </header>
      <main>
        <div class="content-box">
          <section class="step">
            <div class="icon">
              <img src="/src/assets/become-donor-s2.png" height="81px" alt="Stap 2" />
            </div>
            <h2>Medische <br /> check.</h2>
            <p>
              Bij de medische check maak je 
kennis met Sanquin. We 
checken je Hb-waarde en 
bloeddruk. Ook nemen we 
bloed af om te testen op  
infectieziekten en om je 
bloedgroep te bepalen. Je 
doneert nog niet.
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
          this.$router.push("/informatie/hoemeldikmeaan/stap3");
        } else if (deltaX < -50) {
          // If swipe left to right, go back
          this.$router.back();
        }
      },
    },
  };
  </script>
  
  <style scoped>

  
  </style>