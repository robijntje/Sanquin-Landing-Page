<template>
  <div id="app" class="informatie">
    <header class="header">
      <h1>Meer informatie</h1>
    </header>

    <main>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Wat wil je weten?" />
      </div>

      <div class="questions-list">
        <router-link v-for="item in filteredQuestions" :key="item" :to="getRoute(item)" class="questions-item">
          {{ item }}
        </router-link>
      </div>
      <button class="contact-button">App met ons</button>
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

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;     /* Font will be replaced */
}

.informatie {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
}

.header {
  display: flex;
  align-items: center;
  background-color: #d32f2f;
  color: white;
  padding: 16px;
}

h1 {
  font-size: 20px;
  margin: 0;
}

.search-bar {
  display: flex;
  margin: 20px;
}

.search-bar input {
  flex: 1;
  padding: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.questions-list {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}

.questions-item {
  display: block;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 16px;
  text-decoration: none;
  color: black;
}

.questions-item:hover {
  background-color: #f5f5f5;
}

.contact-button {
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  margin: 20px;
  display: flex;
  justify-content: center;
}
</style>