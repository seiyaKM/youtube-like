<script setup lang="ts">
type Props = {
  thumbnail: string;
  avatar: string;
  title: string;
  channel: string;
  meta?: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="thumbnail-card">
    <v-card :image="props.thumbnail" height="200" rounded="lg"> </v-card>
    <div class="d-flex mt-3">
      <v-avatar :image="props.avatar" class="mr-3"></v-avatar>
      <div>
        <h3>{{ props.title }}</h3>
        <p>{{ props.channel }}</p>
        <p>{{ props.meta }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbnail-card {
  max-width: 320px;
}
</style>
