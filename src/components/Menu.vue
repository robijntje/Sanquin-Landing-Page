<template>
  <div>
    <!-- Menu button -->
    <div class="menu-icon" @click="toggleMenu">☰</div>

    <!-- Menu -->
    <div class="main-menu" :class="{ open: isMenuOpen }">
      <div class="menu-header">
        <h2>Menu</h2>
        <button class="close-button" @click="toggleMenu">✖</button>
      </div>
      <nav>
        <router-link to="/" class="menu-item" @click="toggleMenu">Home</router-link>
        <router-link to="/informatie" class="menu-item" @click="toggleMenu">Meer informatie</router-link>
        <router-link to="/verhalen" class="menu-item" @click="toggleMenu">Bekijk de verhalen</router-link>
        <img id="shareButton" src="@/assets/share-button.svg" alt="Delen" class="share-img"  @click="shareContent" />
      </nav>
    </div>

    <!-- Overlay when menu is open -->
    <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isMenuOpen: false, // Track if menu is open or closed
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    async shareContent() {
      const shareData = {
        title: "Bloed doneren",
        text: "Wil je met mij bloed gaan doneren?",
        url: window.location.href, // Uses current URL
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          console.log("Shared");
        } else {
          console.error("Not supported");
        }
      } catch (err) {
        console.error("Error:");
      }
    },
  },
};
</script>

<style scoped>
</style>