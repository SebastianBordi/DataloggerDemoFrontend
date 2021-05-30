<template>
<div>
    <nav class="navbar navbar-dark justify-content-between list-group-horizontal-xl" style="background-color: black;">
        <img src="@/assets/title.png" style="max-height: 100px;">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/sensors" class="nav-link">Sensores</router-link>
        <router-link to="/measurements" class="nav-link">Medidas</router-link>
        <router-link to="/about" class="nav-link">Acerca de</router-link>
        <button class="btn btn-outline-success my-2 my-sm-0" >Login</button>
        
    </nav>
</div>
</template>

<script>
import router from "@/router"

export default {
  name: "navbar",
  router
};
</script>

<style>

</style>