<script setup lang="ts">
import { ref } from 'vue';
import data from '@/dummy/data.json';
import ThumbnailCard from '@/components/ThumbnailCard.vue';

const list = ref([
  'すべて',
  '音楽',
  'ライブ',
  'ミックス',
  'アクション&アドベンチャーゲーム',
  'キャラクターアニメ、子供向けアニメ',
  '最近アップロードされた動画',
]);

const toggleClass = (isSelected: boolean | undefined) => {
  if (isSelected) {
    return 'bg-grey-darken-4';
  } else {
    return 'bg-grey-lighten-3';
  }
};
</script>

<template>
  <v-item-group>
    <div class="d-flex align-center justify-start">
      <v-item #default="{ isSelected, toggle }" v-for="(item, index) in list" :key="index">
        <v-btn variant="flat" :class="['ml-3', toggleClass(isSelected)]" rounded="lg" @click="toggle">{{ item }}</v-btn>
      </v-item>
    </div>
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
