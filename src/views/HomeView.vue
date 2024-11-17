<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

/*컴포넌트 정의부분*/
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>


