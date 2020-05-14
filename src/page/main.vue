<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  //导入组件

  export default {
    data() {
      return {
      }
    },
    methods: {
      footBarChange(active) {
        console.log(active)
      }
    }
  }
</script>

<style scoped lang="scss">

  body {
    margin: 0;
    padding: 0;
    background-color: #fbfaf7;
  }

  .head {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .foot {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>
