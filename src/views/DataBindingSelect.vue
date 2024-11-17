<script>
export default {
  name: "DataBindingSelect",
  data() {
    return {
      city: '064',
    }
  },
  methods: {
    fnTest(e) {
      this.city = e.target.value;
      console.dir(e.target)
      console.log('선택한 값 = ' + this.city)
    }
  }
}
</script>

<template>
  <div>
    <select v-model="city" @change="fnTest">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>

<style scoped>

</style>
