<template>
  <h1>App.vue</h1>
  <ul class="ul">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/dotenvtest">DotenvTest</router-link></li>
    <li><router-link to="/databinding">DataBinding</router-link></li>
    <li><router-link to="/databindinghtml">DataBindingHtml</router-link></li>
    <li><router-link to="/dataBindingInputText">DataBindingInputText</router-link></li>
    <li><router-link to="/dataBindingInputNumber">DataBindingInputNumber</router-link></li>
    <li><router-link to="/dataBindingTextarea">DataBindingTextarea</router-link></li>
    <li><router-link to="/dataBindingSelect">DataBindingSelect</router-link></li>
    <li><router-link to="/dataBindingCheckbox">DataBindingCheckbox</router-link></li>
    <li><router-link to="/dataBindingCheckbox2">DataBindingCheckbox2</router-link></li>
    <li><router-link to="/dataBindingRadio">DataBindingRadio</router-link></li>
    <li><router-link to="/dataBindingAttribute">DataBindingAttribute</router-link></li>
    <li><router-link to="/dataBindingButton">DataBindingButton</router-link></li>
    <router-view/>
  </ul>
  <nav>






  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ul {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px 1px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>
