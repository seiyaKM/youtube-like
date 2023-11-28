<script setup lang="ts">
import data from '@/dummy/data.json';
import ThumbnailCard from '@/components/ThumbnailCard.vue';
</script>

<template>
  <v-item-group>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
    <v-btn>ALL</v-btn>
  </v-item-group>

  <div class="d-flex flex-wrap mt-3">
    <thumbnail-card
      :title="data.title"
      :thumbnail="data.thumbnail"
      :avatar="data.avatar"
      :channel="data.channel"
      :meta="data.meta"
      v-for="index in 10"
      :key="index"
      class="ma-2"
    ></thumbnail-card>
  </div>
</template>
