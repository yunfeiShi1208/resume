<template>
  <div>
    <div class="resume">
      <div class="resume_content">
        <el-row class="resume_content_top">
          <i></i>
          <span>菜单</span>
        </el-row>
        <el-row class="form_wrap" style="padding:3rem 0rem 2rem 0rem;height: 100%;margin: 0;">
          <div style=" position: relative;top: 50%;left: 50%;right: 0;bottom: 0;transform: translate(-50%, -50%);text-align: center;">
            <el-link type="primary" style="font-size: 16px;" @click="goIntro">个人简历</el-link>
            <el-link type="success" style="font-size: 16px;" @click="goPro">工作及项目</el-link>
            <el-link type="warning" style="font-size: 16px;" @click="goChart">图表展示</el-link>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    // 跳转
    goIntro () {
      this.$router.push('/Introduction')
    },
    goPro () {
      this.$router.push('/Project')
    },
    goChart () {
      this.$router.push('/showChart')
    }
  }
}
</script>
<style lang='less' scoped>
.top-nav {
  padding-left: 10px;
  height: 64px;
}
.center_main {
  width: 1200px;
  margin: 0 auto;
}
.top-nav-right p span:last-child {
  cursor: pointer;
}
.resume_content {
  margin: 30px auto;
  width: 93.6%;
}
.resume_content_top {
  height: 60px;
  background: #fff;
  box-shadow: 3px 3px 3px 3px #eee;
}

.resume_content_top  i {
  width: 4px;
  height: 30px;
  float: left;
  background: #409eff;
  margin-left: 2rem;
  margin-right: 1rem;
  margin-top: 15px;
}
.resume_content_top span {
  float: left;
  line-height: 40px;
  margin: 10px 5px;
  font-size: 16px;
  font-weight: bold;
}
.form_wrap{
  background: #fff;
  box-shadow: 3px 3px 3px 3px #eee;
  margin-top: 30px;
}
.pass span{
  display: inline-block;
  line-height: 20px;
  font-size: 12px;
  margin-top: 5px;
}
.tips{
  color: red;
  display: block;
  margin-bottom: 10px;
  }
.right-type-light {
  color: #409eff;
}
</style>
