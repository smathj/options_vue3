<script>



export default {

  name: "DataBindingInputText",
  data() {
    return {
      valueModel: 'South Korea',
    }
  },

  methods: {
    fnTest(e) {
      this.valueModel = e.target.value;
      console.log('입력값 = ', this.valueModel);
    }
  }
}



</script>

<template>
  <div>
    <input @input="fnTest" id="myinput" type="text" v-model="valueModel">
  </div>
</template>

<style scoped>

</style>
