<script>
export default {
  name: "DataBindingRadio",
  data() {
    return {
      picked: '제주',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주'
    }
  },
  methods: {
    fnTest() {
      console.log()
    }
  }
}
</script>

<template>
  <div>
    <label for="radio1">
      <input type="radio" id="radio1" v-bind:value="radioValue1" v-model="picked">
      {{radioValue1}}
    </label>
    <label for="radio2">
      <input type="radio" id="radio2" :value="radioValue2" v-model="picked">
      {{radioValue2}}
    </label>
    <label for="radio3">
      <input type="radio" id="radio3" v-bind:value="radioValue3" v-model="picked">
      {{radioValue3}}
    </label>
  </div>
  <div>
    선택한 지역 = {{picked}}
  </div>
</template>

<style scoped>

</style>
