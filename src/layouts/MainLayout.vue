<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
</script>

<template>
  <v-app-bar height="56" class="main-layout__header" elevation="0">
    <div class="d-flex align-center">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon icon="mdi-youtube"></v-icon>
      <span>YouTube</span>
    </div>
    <div class="d-flex align-center main-layout__search">
      <v-text-field variant="outlined" hide-details density="compact" rounded="pill" placeholder="search">
        <template #append-inner>
          <v-icon icon="mdi-magnify"></v-icon>
        </template>
      </v-text-field>
      <v-btn icon="mdi-microphone" color="grey-lighten-3 ml-3" variant="flat"></v-btn>
    </div>
    <div class="d-flex align-center">
      <v-btn icon="mdi-video-box"></v-btn>
      <v-btn icon="mdi-bell-badge-outline"></v-btn>
      <v-btn icon="mdi-account"></v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" class="pa-3">
    <v-list-item link title="ホーム" prepend-icon="mdi-home" :to="{ name: 'home' }" class="rounded-lg"></v-list-item>
    <v-list-item link title="ショート" prepend-icon="mdi-play-speed" :to="{ name: 'short' }" class="rounded-lg"></v-list-item>
    <v-list-item link title="登録チャンネル" prepend-icon="mdi-playlist-play" :to="{ name: 'subscription' }" class="rounded-lg"></v-list-item>
  </v-navigation-drawer>
  <v-main>
    <div class="pa-4">
      <router-view></router-view>
    </div>
  </v-main>
</template>

<style scoped lang="scss">
.main-layout {
  &__header {
    ::v-deep(.v-toolbar__content) {
      justify-content: space-between;
    }
  }
  &__search {
    flex: 1;
    max-width: 736px;
  }
}
</style>
