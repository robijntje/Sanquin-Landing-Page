<template>
    <div id="app" class="verhalen">
      <header class="header">
        <h1 class="header-title">Bekijk de verhalen</h1>
      </header>
  
      <main>
            <!-- Featured video image -->
        <div class="featured-video">
            <img
        src="@/assets/viora-banner.jpg"
        alt="Een foto van een vrouw die lacht in de camera"
        class="featured-image"
      />
        </div>
      <!-- Video list -->
      <div class="content-box">
        <section class="video-list">
        <div class="video-card" v-for="video in videos" :key="video.id" @click="navigateTo(video.link)">
          <div class="video-details">
            <h3>{{ video.header }}</h3>
            <p>{{ video.subhead }}</p>
          </div>
          <div class="video-icon">
            <img :src="video.image" :alt="video.header" />
          </div>
        </div>

        <button class="register-button">
      <a href="https://www.sanquin.nl/aanmelden-donor/stap-1" target="_blank" class="register-button">
        Aanmelden
      </a>
    </button>  

      </section>
      </div>
      </main>
    </div>
  </template>
  
  <script>
  //Data for video list
 export default {
    data() {
    return {
        videos: [
        {
          id: 1, //Order of video in list
          header: "Viora", //Patient name
          subhead: "Is genezen door bloedtransfusies", //Short discription of story
          image: "https://www.sanquin.nl/binaries/content/gallery/sanquinnl/donor-worden/donor--en-patientverhalen/viora.jpg", //Patient image
          link: "https://www.youtube.com/watch?v=jGDGQI92G9I&pp=ygUNc2FucXVpbiB2aW9yYQ%3D%3D" //Video link
        },
        {
          id: 2,
          header: "Lex",
          subhead: "Een ongeluk schuilt in een klein hoekje",
          image: "https://www.sanquin.nl/binaries/content/gallery/sanquinnl/donor-worden/donor--en-patientverhalen/patientverhaal_lex_main.png",
          link: ""
        },
        {
          id: 3,
          header: "Christina",
          subhead: "Kreeg een zeldzame bloedziekte",
          image: "https://www.sanquin.nl/binaries/content/gallery/sanquinnl/donor-worden/donor--en-patientverhalen/patientverhaal-christina-o-h.jpg",
          link: ""
        },
        {
          id: 4,
          header: "Cheyanne",
          subhead: "Is donoren voor altijd dankbaar",
          image: "https://www.sanquin.nl/binaries/content/gallery/sanquinnl/donor-worden/donor--en-patientverhalen/patientverhaal-cheyanne-h.jpg",
          link: ""
        },
      ],
    };
  },
  methods: {
    navigateTo(link) {
      if (link) {
        window.location.href = link;
      }
    }
  }
};
  </script>
  
  <style scoped>
    .content-box {
        padding: 24px 16px 0 16px;
    }
</style>
