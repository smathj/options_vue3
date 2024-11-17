<script>
export default {
  name: "DataBindingAttribute",
  data() {
    return {
      imgSrc: "https://i.namu.wiki/i/pTVoWDp5G09PGTRUTbCy8raXo9CB47uF2wcuzdUYTlPwRjU6zjl0Reoih4MIXXRTnfxVl-yKlPjTQSVhAbfSxA.webp"
    }
  }
}
</script>

<template>
  <div>
    <div>
      외부 링크 사진
      <img v-bind:src="imgSrc" />
    </div>
    <div>
      내부 assets 사진
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
