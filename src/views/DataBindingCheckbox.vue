<script>
export default {
  name: "DataBindingCheckbox",
  data() {
    return {
      checked: true
    }
  },
  methods: {
    fnTest() {
      console.log('변경된 값 = ' + this.checked)
    }
  }
}
</script>

<template>
  <div>
    <label for="checkbox">
      <input id="checkbox" @change="fnTest" type="checkbox" v-model="checked">
      {{checked}}
    </label>
  </div>
</template>

<style scoped>

</style>
