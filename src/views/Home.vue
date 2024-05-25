<template>
  <v-layout>
    <v-app-bar class="bg-black h-auto app-bar">
      <div class="mx-auto h-100">
        <img src="/images/logo.jpg" alt="logo" class="logo-image">
      </div>
    </v-app-bar>
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