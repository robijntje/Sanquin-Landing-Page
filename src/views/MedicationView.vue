<template>
  <div id="app" class="medicatie">
    <header class="header">
      <h1 class="header-title">Zoek medicatie</h1>
    </header>

    <main>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Welke medicatie gebruik je?" />
      </div>

    <div class="content-box">
      <div class="questions-list">
        <div v-for="(item, index) in filteredQuestions" :key="item.text" class="questions-item">

          <span class="circle" :style="{ backgroundColor: item.color }"></span>
          {{ item.text }}
        </div>
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
        { text: 'Ibuprofen', color: 'green' },
        { text: 'Fluoxetine', color: 'green' },
        { text: 'Oxycodon', color: 'red' }
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

};
</script>

<style scoped>


</style>