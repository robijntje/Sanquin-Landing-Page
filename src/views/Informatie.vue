<template>
  <div id="app" class="informatie">
    <header class="header">
      <h1 class="header-title">Meer informatie</h1>
    </header>

    <main>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Wat wil je weten?" />
      </div>

    <div class="content-box">
      <div class="questions-list">
        <router-link v-for="item in filteredQuestions" :key="item" :to="getRoute(item)" class="questions-item">
          {{ item }}
        </router-link>
      </div>
      <button class="contact-button">App met ons</button>
    </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      searchQuery: '',
      questionsItems: [
        'Hoe meld ik me aan?',
        'Waar kan ik doneren?',
        'Mag ik met mijn medicatie doneren?',
        'Mag ik auto rijden na een donatie?',
        'Wat is het verschil tussen bloed of plasma doneren?'
      ]
    };
  },
  computed: {
    filteredQuestions() {
      if (!this.searchQuery) {
        return this.questionsItems;
      }
      return this.questionsItems.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    getRoute(item) {
      // Finds route for question based on name of question. Filters out spaces.
      return `/informatie/${item.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;
    }
  }
};
</script>

<style scoped>

</style>