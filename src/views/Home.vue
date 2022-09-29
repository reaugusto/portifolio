<template>
  <div class="row align-center">
    <div class="col col-lg-4 p-3">
      <img class="img" src="@/assets/img/profile.png" alt="">
    </div>
    <div class="col col-lg-6 mt-5">
      <span class= "titulo" >Renato Sousa | </span>
      <v-typical
    class="blink titulo"
    :steps="['Front-End', 2000, 'Web Designer', 2000, 'Pai da Helena', 2000, 'Cristão', 2000]"
    :loop="Infinity"
    :wrapper="'span'"
    ></v-typical>
    <hr />
    <p>
      Meu nome é Renato Augusto, sou analista de sistemas e desenvolvedor front-end. Gosto muito de efeitos de interface e animações, proporcionar
      uma boa experiencia ao usuário intuitiva e dinâmica.
    </p>
    <p>
      Amante tecnologia, nunca consegui viver longe da área. Sou organizado, gosto de desafios e procuro sem as melhores opções para solução de problemas,
      sempre atento aos detalhes. Filmes e series de ficção ciêntifica, adoro estudar areas diferentes e aumentar meu repertório. Pai de uma linda menina.
    </p>
    </div>

  </div>

</template>
<script>

import VTypical from 'vue-typical';

export default {
  components: { 
    VTypical
  },
  name: 'HomePage',

}
</script>
<style scoped>
.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.titulo{
  color: #FFFFFF;
  font-size: 25px;
}

p{
  margin-right: 20px;
}
</style>