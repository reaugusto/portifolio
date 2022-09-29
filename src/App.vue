<template>
  <topo-padrao class="animate__animated animate__slideInRight"></topo-padrao>
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__flipInY"
      leave-active-class="animate__animated animate__flipOutY"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  components: { TopoPadrao },
  name: 'App',

}
</script>

<style>
  body{
    background-color: rgb(143, 0, 0);
  }
</style>

