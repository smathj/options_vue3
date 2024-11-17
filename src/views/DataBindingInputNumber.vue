<script>
export default {
  name: "DataBindingInputNumber",
  data() {
    return {
      numberModel: 3
    }
  },
  methods: {
    fnTest(e) {
      this.numberModel = e.target.value;
      console.log('입력한 숫자 값 = ', this.numberModel)
    }
  }
}
</script>

<template>
  <div>
    <input @input="fnTest"  type="number" v-model.number="numberModel">
  </div>
</template>

<style scoped>

</style>
