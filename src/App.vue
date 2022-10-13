<template>
  <topo-padrao class="animate__animated animate__slideInRight"></topo-padrao>
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__flip"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <div class="redeSocial">
    <rede-social></rede-social>
  </div>
</template>

<script>
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import RedeSocial from './components/layouts/RedeSocial.vue';

export default {
  components: { TopoPadrao, RedeSocial },
  name: 'App',

}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .redeSocial{
    position:fixed;
    right: 5px;
    top:30%;
  }
  body{
    width: 99vw;
    height: 100vh;
    background-repeat: repeat-y;
    background-size: cover;
    background: linear-gradient(156deg,  #d7d7d7, #777777,#313131, #272727, #000000);

}

</style>