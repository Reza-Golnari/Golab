<template>
  <div class="pa-5">
    <v-card class="w-md-75 mx-auto d-flex flex-column align-center pa-5 ga-3">
      <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" class="rounded-lg" alt="">
      <v-card-title class="heading-h1">محصول</v-card-title>
      <v-card-text class="heading-h5 text-end w-100">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </v-card-text>
      <v-card-subtitle class="w-100 text-end body-b1">
        قیمت: 3000
      </v-card-subtitle>
      <router-link to="/" class="body-b1 text-end w-100">صفحه اصلی</router-link>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {ref , onMounted , type Ref} from "vue";
import {useProductsStore , IProduct} from "@/stores/productsStore";
import {useRoute , useRouter} from "vue-router";

const productStore = useProductsStore();
const router = useRouter();
const route = useRoute();
const targetProduct : Ref<IProduct | null> = ref(null)

onMounted(()=>{
  if(productStore.products.length) router.push('/')
  const selectedProduct = productStore.products.find(product => product.id === +route.params.id);
  if(selectedProduct) targetProduct.value = selectedProduct
  else router.push('/');
})
</script>

<style scoped>
img{
  width: clamp(250px , 50% , 600px);
  object-fit: cover;
  aspect-ratio: 3 / 2;
}
</style>