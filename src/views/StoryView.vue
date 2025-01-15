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
        alt="Featured video"
        class="featured-image"
      />
        </div>
      <!-- Video list -->
      <div class="content-box">
        <section class="video-list">
        <div class="video-card" v-for="video in videos" :key="video.id">
            <div class="video-details">
            <h3>{{ video.header }}</h3>
            <p>{{ video.subhead }}</p>
          </div>
          <div class="video-icon">
            <img :src="video.image" :alt="video.header" />
          </div>
        </div>
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
          id: 1,
          header: "Header 1",
          subhead: "Subhead 1",
          image: "@/assets/viora-icon.jpg",
        },
        {
          id: 2,
          header: "Header 2",
          subhead: "Subhead 2",
          image: "",
        },
        {
          id: 3,
          header: "Header 3",
          subhead: "Subhead 3",
          image: "",
        },
        {
          id: 4,
          header: "Header 4",
          subhead: "Subhead 4",
          image: "",
        },
      ],
    };
  },
};
  </script>
  
