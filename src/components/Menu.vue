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
    },
  };
  </script>
  

  <style>
  .menu-icon {
    font-size: 20px;
    padding: 10px;

    color: white;
    position: fixed;
    top: 36px; /* Will be updated with correct value later */
    left: 16px; /* Will be updated with correct value later */
    z-index: 1100;
    border-radius: 4px;
  }
  
  .main-menu {
    position: fixed;
    top: 0;
    left: -250px; /* Off screen when button not tapped */
    width: 250px;
    height: 100%;
    background-color: #d32f2f;
    color: white;
    transition: left 0.3s ease; /* Sliding effect */
    z-index: 1200;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  
  .main-menu.open {
    left: 0; /* Slide into view from left */
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1100;
  }

  
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .close-button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
  }
  
  .menu-item {
    color: white;
    font-size: 18px;
    margin-bottom: 16px;
    display: block;
    text-decoration: none;
  }

  </style>