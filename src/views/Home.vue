<template> 
<div class="container">
  <div class="row justify-content-center align-items-center mt-5">
    <div class="col col-lg-5 d-lg-flex justify-content-center">
      <img class="img-fluid" src="@/assets/img/profile.png" alt="" />
    </div>
    <div class="col col-lg-5 mt-2">
      <span class="titulo">Renato Sousa | </span>
      <v-typical
        class="blink titulo"
        :steps="[
          'Front-End',
          2000,
          'Web Designer',
          2000,
          'Pai da Helena',
          2000,
          'Cristão',
          2000
        ]"
        :loop="Infinity"
        :wrapper="'span'"
      ></v-typical>
      <hr />
      <p>
        Meu nome é Renato Augusto, sou analista de sistemas e desenvolvedor
        front-end. Gosto muito de efeitos de interface e animações, proporcionar
        uma boa experiencia ao usuário intuitiva e dinâmica.
      </p>
      <p>
        Amante tecnologia, nunca consegui viver longe da área. Sou organizado,
        gosto de desafios e procuro sem as melhores opções para solução de
        problemas, sempre atento aos detalhes. Filmes e series de ficção
        ciêntifica, adoro estudar areas diferentes e aumentar meu repertório.
        Pai de uma linda menina.
      </p>
    </div>
    <!-- <div class="col-lg-2 d-lg-flex justify-content-end align-items-center">
      <rede-social></rede-social>
    </div> -->
  </div>
</div>
</template>
<script>
import VTypical from "vue-typical";
// import RedeSocial from "@/components/layouts/RedeSocial.vue";

export default {
  components: {
    VTypical,
    // RedeSocial,
  },
  name: "HomePage",
}
</script>
<style scoped>

.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.titulo {
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
}

p {
  margin-right: 20px;
  color: whitesmoke;
}
</style>
