<template>
  <v-layout>
    <v-app-bar class="bg-black h-auto app-bar">
      <div class="mx-auto h-100">
        <img src="/images/logo.jpg" alt="logo" class="logo-image">
      </div>
    </v-app-bar>
    <v-main class="pa-5 bg-background d-flex align-center justify-center" min-height="300px" style="margin-top: 80px">
      <div class="d-flex flex-column align-center justify-center text-center ga-3" style="max-width: 600px">
        <h1 class="heading-h1 text-primary">گلاب کاشان</h1>
        <h4 class="heading-h4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h4>
        <v-btn color="primary">
          <p class="heading-h5 pt-1 px-6 text-white"> ادامه</p>
        </v-btn>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app-bar{
  height: 80px !important;
}
.logo-image{
  height: 70px;
  object-fit: cover;
}
</style>