<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/add">Add</router-link>
    </p>
  </div>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite x" /> -->
  <component :is="$route.meta.layout || 'div'"></component>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
