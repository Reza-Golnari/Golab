<template>
  <v-card
      class="mx-auto bg-surface card"
      max-width="344"
  >
    <router-link :to="`/product/${productId}`">
      <v-img
          height="300px"
          aspect-ratio="1"
          :src="image"
          cover
          class="cover"
      />
    </router-link>

    <v-card-title>
      <router-link :to="`/product/${productId}`" class="text-decoration-none heading-h2 ">
        {{title}}
      </router-link>
    </v-card-title>

    <v-card-subtitle class="heading-h5">
      قیمت : {{price}}
    </v-card-subtitle>

    <v-card-actions dir="rtl">
      <v-btn>
        <p class="body-b1 text-primary">توضیحات</p>
      </v-btn>

      <v-spacer/>

      <v-btn
          color="secondaryDark"
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider/>

        <v-card-text class="body-b1">
          {{caption}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import {ref , type Ref } from "vue"

defineProps({
  productId: Number,
  image: String,
  title: String,
  caption: String,
  price: String
})

const show : Ref<boolean> = ref(false);
</script>

<style scoped>
.cover{
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.card{
  border-top-left-radius: 50px;
  box-shadow: 0 3px 15px rgba(0 , 0 , 0 , .2);
}

.card:hover{
  box-shadow: 0 3px 18px rgba(0 , 0 , 0 , .4);
}
</style>