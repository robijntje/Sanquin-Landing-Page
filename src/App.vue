<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <header>
    <div id="app">
    <Menu />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</header>
</template>

