<template>
  <div>
    <v-layout>
      <v-app-bar class=" h-auto app-bar">
        <div class="mx-auto h-100">
          <img src="/images/logo.png" alt="logo" class="logo-image">
        </div>
      </v-app-bar>
      <v-main class="pa-5 bg-background d-flex align-center justify-center" min-height="400px" style="margin-top: 80px">
        <div class="d-flex flex-column align-center justify-center text-center ga-3" style="max-width: 600px">
          <h1 class="heading-h1 text-primary">گلاب افتخار</h1>
          <h4 class="heading-h4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h4>
          <v-btn color="primary" class="header-btn" to="#products">
            <p class="heading-h5 pt-1 px-6 text-white"> ادامه</p>
          </v-btn>
        </div>
      </v-main>
    </v-layout>
    <v-row class="py-5" dir="rtl" id="products">
      <v-col cols="12" md="6" lg="4" v-for="product in productsStore.products" >
        <ProductCard :image="product.src" :productId="product.id" :title="product.title" :price="product.price" :caption="product.caption" />
      </v-col>
    </v-row>
    <div class="bg-background pa-2 d-flex align-center justify-center">
      <div class="d-flex align-center">
        <v-icon icon="mdi-phone" color="secondaryDark" />
        <p class="heading-h5 pt-1">09123456789</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import ProductCard from "@/components/productCard.vue";
import {useProductsStore} from "@/stores/productsStore";

const productsStore = useProductsStore()

onMounted(()=> productsStore.fetchProducts());
</script>

<style scoped>
.app-bar{
  height: 80px !important;
}
.logo-image{
  height: 70px;
  object-fit: cover;
}

.header-btn:hover{
  background-color: #1fa358 !important;
}

.header-btn p{
  transition: color 150ms;
}

.header-btn:hover p {
  color: black !important;
}
</style>