<script>
export default {
  name: "DataBindingCheckbox2",
  data() {
    return {
      checked: []
    }
  },
  methods: {
    fnTest() {
      console.log('현재 체크 상태 = ' + this.checked)
    }
  }
}
</script>

<template>
  <div>
    <label for="checkbox1">
      <input @change="fnTest" id="checkbox1" type="checkbox" value="서울" v-model="checked">
      서울
    </label>
    <label for="checkbox2">
      <input @change="fnTest" id="checkbox2" type="checkbox" value="부산" v-model="checked">
      부산
    </label>
    <label for="checkbox3">
      <input @change="fnTest" id="checkbox3" type="checkbox" value="제주" v-model="checked">
      제주
    </label>
  </div>
  <div>
    체크한 지역 {{checked}}
  </div>
</template>

<style scoped>

</style>
