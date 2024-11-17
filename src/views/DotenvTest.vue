<template>
  <h1>Dotenv {{mgs}}</h1>
</template>

<script>

// import * as dotenv from 'dotenv'
// dotenv.config()
console.log(process.env)
console.log('process.env.VUE_APP_MGS = ', process.env.VUE_APP_MGS)


export default {
  name: "DotenvTest",
  data() {
    return {

      mgs: process.env.VUE_APP_MGS
    }
  }
}

</script>


<style scoped>

</style>
