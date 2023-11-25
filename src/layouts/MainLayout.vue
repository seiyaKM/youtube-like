<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <span>app bar</span>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list-item link title="Home" prepend-icon="mdi-home" to="home"></v-list-item>
    <v-list-item link title="Short" prepend-icon="mdi-shower" to="short"></v-list-item>
    <v-list-item link title="Subscription" prepend-icon="mdi-subway" to="subscription"></v-list-item>
  </v-navigation-drawer>
  <v-main><router-view></router-view> </v-main>
</template>
