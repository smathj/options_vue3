<script>
export default {
  name: "DataBindingButton",
  data() {
    return {
      textValue: ""
    }
  }
}
</script>

<template>
  <div>
    <div>textValue 가 빈값일땐 버튼을 클릭할 수 없습니다</div>
    <input type="text" v-model="textValue">
    <button type="button" v-bind:disabled="textValue===''">
      Click
    </button>
  </div>
</template>

<style scoped>

</style>
