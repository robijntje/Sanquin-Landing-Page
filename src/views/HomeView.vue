<script setup>
</script>
<template>
  <div id="app">
    <!-- Header contains logo in red -->
    <header>
      <div class="container">
        <img src="@/assets/sanquin-white.png" alt="Sanquin Logo in white" class="logo" />
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Slogan -->
      <h1>DONEER BLOED.<br />RED LEVENS.</h1>

      <!-- Heart image at the center -->
      <img
        src="@/assets/heart-new-white-animated.gif"
        alt="A heart in white"
        class="heart-image"
      />

      <!-- Basic facts -->
      <p>
        Per donatie red je 3 levens.<br />
        Aanmelden kan in 3 minuten.<br />
        Reiskosten worden vergoed.<br />
        Wij helpen je op weg.
      </p>
    </main>

    <!-- Footer with buttons -->
    <footer>
      <button class="primary-button">Aanmelden</button>
      <button class="secondary-button">Meer informatie</button>
      <button class="secondary-button">Bekijk de verhalen</button>
    </footer>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: "SanquinApp",
};
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
  header .logo {
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
  
  p {
    font-size: 20px;
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
    width: 50%; /* Image scales to size of mobile phone, always 100% */
    margin: 16px 16px;
  }
</style>
