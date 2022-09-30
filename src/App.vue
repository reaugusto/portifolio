<template>
  <topo-padrao class="animate__animated animate__slideInRight"></topo-padrao>
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__flip"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  components: { TopoPadrao },
  name: 'App',

}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
  width: 99vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(99, 99, 99);
  background-image: radial-gradient(at 80% 0%,hsla(24, 100%, 44%, 1) 0px,transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 15%, 19%, 1) 0px, transparent 50%),
    radial-gradient(at 61% 32%, hsla(277, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(38, 100%, 44%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(57, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(342, 0%, 16%, 1) 0px, transparent 50%);
}

</style>