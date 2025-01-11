<template>
  <div id="app" class="medicatie">
    <header class="header">
      <h1 class="header-title">Zoek medicatie</h1>
    </header>

    <main>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Hoe heet je medicatie?" />
      </div>

    <div class="content-box">
      <div class="questions-list">
        <router-link v-for="(item, index) in filteredQuestions" :key="item.text" :to="getRoute(item.text)" class="questions-item">

          <span class="circle" :style="{ backgroundColor: item.color }"></span>
          {{ item.text }}
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
        { text: 'Paracetamol', color: 'green' },
        { text: 'Progynova', color: 'green' },
        { text: '3', color: 'green' },
        { text: '4', color: 'green' },
        { text: '5', color: 'red' }
      ]
    };
  },
  computed: {
    filteredQuestions() {
      if (!this.searchQuery) {
        return this.questionsItems;
      }
      return this.questionsItems.filter(item =>
        item.text.toLowerCase().includes(this.searchQuery.toLowerCase())
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
body {
  margin: 0;
  font-family: proxima-nova, sans-serif;     /* Font will be replaced */
}

.medicatie {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-box {
  background-color: black;
  padding: 16px;
  margin: 0 16px;
}

.header {
  display: flex;
  align-items: center;
  color: white;
  padding: 16px;
  margin-top: 30px;

}

.header-title {
  font-size: 20px;
  margin-left: 40px;
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

}

.questions-item {
  display: block;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 32px;
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
  display: flex;
  justify-content: center;
}

.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 16px;
}
</style>