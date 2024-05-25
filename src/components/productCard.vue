<template>
  <v-card
      class="mx-auto bg-background"
      max-width="344"
  >
    <v-img
        height="200px"
        :src="image"
        cover
    />

    <v-card-title class="heading-h2 text-end">
      {{title}}
    </v-card-title>

    <v-card-subtitle class="heading-h5 text-end">
      قیمت : {{price}}
    </v-card-subtitle>

    <v-card-actions dir="rtl">
      <v-btn>
        <p class="body-b1 text-primary">توضیحات</p>
      </v-btn>

      <v-spacer/>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider/>

        <v-card-text class="text-end body-b1">
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