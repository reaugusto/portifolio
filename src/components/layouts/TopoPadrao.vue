<template>
  <div class="row barra align-items-center">
    <div class="col-3 teste">
      <span class="p-5 animate__animated animate__bounce">RENATO SOUSA</span>
    </div>
    <div class="col-6">
      <ul class="nav justify-content-end  font-monospace">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/home"><i class="bi bi-house-fill"></i> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/habilidades"><i class="bi bi-tools"></i>  Habilidades</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/home"><i class="bi bi-images"></i> Portifolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/home"><i class="bi bi-person-lines-fill"></i> Contato</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TopoPadrao'
}
</script>

<style scoped>
    .barra{
        background-color: rgba(196, 196, 196, 0.11);
        height: 100px;
        backdrop-filter: blur(10px);
        border-bottom: solid 1px rgba(255, 255, 255, 0.452);
    }
    .barra a, .barra a i{
      color: whitesmoke;
     }

     .nav-link:hover, .nav-link:focus{
      color: #f1cd00; 
      font-size: 20px;
      text-shadow: 0 0 50px #f1cd00,
      0 0 100px #f1cd00,
      0 0 150px #f1cd00,
      0 0 250px #f1cd00;
      animation: animate 3s linear infinite;
     }

     @keyframes animate {
      from{
        filter: hue-rotate(0deg)
      }
      to{
        filter: hue-rotate(360deg)
      }
     }

</style>