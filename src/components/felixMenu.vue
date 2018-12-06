<template>
  <header id="menu" class="menu">
    <div class="container">
      <router-link to="/prototypes" tag="a" class="logo logo__brand">
        <img alt="Vue logo" src="../assets/logo.png">
      </router-link>

      <h1> {{ $route.name.charAt(0).toUpperCase() +  $route.name.slice(1) || 'Page Name' }} </h1>
    </div>
    
  </header>
</template>

<script>
export default {
  name: "felixMenu",
}
</script>

<style lang="scss">

  .menu {
    
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #fff;

    & .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    & h1 {
      font-size: 20px;
      width: 100%;
    }
  }

  .logo {
    display: block;
    width: 25px;
    padding: 0 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 25px;
      height: 25px;
    }
  }
</style>
