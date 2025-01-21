<script setup>
</script>
<template>
  <div id="landing">
    <!-- Header contains logo in red -->
    <header class="home-header">
      <div class="container">
        <img src="@/assets/sanquin-white.png" alt="Het logo van Sanquin in het wit" class="logo" />
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Slogan -->
      <h1>DONEER BLOED.<br />RED LEVENS.</h1>

      <!-- Heart image at the center -->
      <img
        src="@/assets/heart-new-white-animated.gif"
        alt="Een wit hart"
        class="heart-image"
      />

      <!-- Basic facts -->
      <p class="facts-list">
        Per donatie red je <strong>3 levens</strong>.<br />
        Aanmelden kan in <strong>3 minuten</strong>.<br />
        Reiskosten worden <strong>vergoed</strong>.<br />
        Doneer wanneer het <strong>jou uitkomt</strong>.
      </p>
    </main>

    <!-- Footer with buttons -->
    <footer>
      <button class="primary-button" @click="$router.push('/informatie/hoemeldikmeaan')">
        Aanmelden
      </button>
      <button class="secondary-button" @click="$router.push('/informatie')">
        Meer informatie
      </button>
      <button class="secondary-button" @click="$router.push('/verhalen')">
        Bekijk de verhalen
      </button>
    </footer>
  </div>
</template>

<script>

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    /* Line height for Chrome and Safari is 1.0. This code is made for future compatibility with other browsers. */
    line-height: 1.0;
  }
  
  .container {
    text-align: left;
    max-width: 400px;
    margin: -8px 0 16px 64px;
  }

  /* Sanquin Logo at home page */
   .logo {
    width: 150px;
    margin-top: 30px;
  }

  h1 {
    color: rgb(255, 255, 255);
    font-size: 2.2em;
    font-weight: 800;
    margin: 0px 16px 16px 16px;
    line-height: 35px;
  }
  
  .facts-list {
    font-size: 18px;
    color: #ffffff;
    margin: 16px;

  }

  .primary-button {
    background-color: #0047AB;
    color: #ffffff;
    width: 100%;
    margin: 0px 16px;
    border-radius: 5px;
    border: 0;
    padding: 16px;
    font-size: 1em;
    font-weight: bold;
  }
  
  .secondary-button {
    background-color: #A300FF;
    color: #ffffff;
    width: 40%;
    margin: 16px;
    border-radius: 5px;
    border: 0;
    padding: 16px;
    font-size: 1em;
    font-weight: bold;
  }

  footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .heart-image {
    width: 50%; /* Image scales to size of mobile phone */
    margin: 16px 16px;
  }

  p strong {
  font-weight: bold;
}
</style>
