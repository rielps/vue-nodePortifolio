<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    <h1>Projeto {{ id }}</h1>
    <p>Detalhes do projeto aqui...</p>
  </div>
  <router-view />
</template>