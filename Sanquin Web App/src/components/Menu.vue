<template>
    <header class="header">
      <div class="menu-icon">☰</div>
      <nav class="menu">
        <router-link to="/" class="menu-item">Home</router-link>
        <router-link to="/info" class="menu-item">Meer informatie</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Menu"
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d32f2f;
    color: white;
    padding: 10px;
  }
  
  .menu-icon {
    font-size: 20px;
  }
  
  .menu {
    display: flex;
  }
  
  .menu-item {
    margin-left: 16px;
    color: white;
    text-decoration: none;
  }
  
  .menu-item:hover {
    text-decoration: underline;
  }
  </style>
  