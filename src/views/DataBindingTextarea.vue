<script>
export default {
  name: "DataBindingTextarea",
  data() {
    return {
      message: '여러 줄을 입력할 수 있는 textarea 입니다.'
    }
  },
  methods: {
    fnTest(e) {
      this.message = e.target.value
      console.log('입력한 값 = ', this.message)
    }
  }
}
</script>

<template>
  <div>
    <textarea @input="fnTest" v-model="message"></textarea>
  </div>
</template>

<style scoped>

</style>
