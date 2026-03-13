<script setup>
// 1. APENAS UM BLOCO DE SCRIPT
import FormularioMatricula from './componentes/FormularioMatricula.vue'
</script>

<template>
  <main>
    <FormularioMatricula />
  </main>
</template>

<style>
/* 3. APENAS UM BLOCO DE STYLE */
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Certifique-se de que a imagem fundo.jpg está na pasta src/assets/ */
  background-image: url('./assets/fundo.png'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>