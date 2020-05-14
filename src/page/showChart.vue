<template>
  <div>
    <div class="resume">
      <div class="resume_content">
        <el-row class="resume_content_top">
          <img src="./imgs/icon1.png" style="height:1rem;cursor:pointer;" @click="backBtn">
          <span>图表展示</span>
          <img src="./imgs/icon4.png" style="height:1rem;">
          <span>{{minute}}'&ensp;{{second}}"</span>
        </el-row>
        <el-row class="form_wrap" style="height:auto;padding:0rem 0rem 2rem 0rem">
          <el-col :span="6" :offset="1">
            <div>
              <i class="el-icon-pie-chart right-type-light" style="float:left;margin:1rem 0 1rem 0;"></i>
              <div style="float:left;margin:1rem;" class="right-type-light">图表</div>
            </div>
            <div style="clear:both;">
              <randomAxis :style="echartstyle" ref="randomAxis"></randomAxis>
            </div>
          </el-col>
          <el-col :span="15" :offset="2">
            <div>
              <i class="el-icon-data-line right-type-light" style="float:left;margin:1rem 0 1rem 0;"></i>
              <div style="float:left;margin:1rem;" class="right-type-light">列表</div>
            </div>
            <div style="clear:both;">
              <randomTable ref='randomTable' :tableData='tableData'></randomTable>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import randomAxis from '../components/axis'
import randomTable from '../components/proTable'
export default {
  name: 'showChart',
  components: {
    randomAxis,
    randomTable
  },
  data () {
    return {
      minute: '00',
      second: '00',
      axisData: [],
      tableData: [],
      echartstyle: {
        flex: '1',
        width: '100%',
        minHeight: '400px'
      },
    }
  },
  mounted () {
    this.initData()
    window.setInterval(() => {
      setTimeout(this.setRandomData(), 0)
    }, 10000)
  },
  methods: {
    // 返回
    backBtn () {
      this.$router.push('/')
    },
    // 初始化
    initData() {
      this.time = new Date()
      this.getTime()
      var h = window.screen.availHeight - 330
      this.echartstyle.minHeight = h  + 'px'
      this.setRdmTable()
      this.$nextTick(_ => {
        this.setRdmArray()
        this.$refs.randomAxis.drawAxis(this.axisData)
        this.$refs.randomTable.refreshForm()
      })
    },
    // 计时
    getTime () {
      let date = new Date()
      let now = date.getTime()
      // 时间差
      let leftTime = now - this.time
      // 分
      let m = Math.floor(leftTime / 1000 / 60 % 60)
      this.minute = m < 10 ? '0' + m : m
      // 秒
      let s = Math.floor(leftTime / 1000 % 60)
      this.second = s < 10 ? '0' + s : s
      setTimeout(this.getTime, 1000)
    },
    // 随机数组
    setRdmArray() {
      this.axisData = []
      for (var i = 0; i < 12; i++) {
        var random = Math.floor(Math.random() * 101)
        this.axisData.push(random)
      }
    },
    // 随机字符串
    setRdmString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
      var maxPos = $chars.length;
      var str = '';
      for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return str;
    },
    // 随机列表值
    setRdmTable() {
      this.tableData = []
      var tableLength = Math.floor(Math.random() * 101)
      for (let i = 0; i < tableLength; i++){
        var a = {}
        a.feild1 = this.setRdmString(50)
        a.feild2 = this.setRdmString(150)
        this.tableData.push(a)
      }
    },
    // 随机赋值
    setRandomData() {
      this.setRdmArray()
      this.setRdmTable()
      if(this.axisData.length == 12 && this.$refs.randomAxis) {
        this.$refs.randomAxis.drawAxis(this.axisData)
      }
      if(this.$refs.randomTable) {
        this.$refs.randomTable.refreshForm()
      }
    }
  }
}
</script>
<style lang='less' scoped>
/deep/.el-form-item{
  // margin-bottom: 40px;
}
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
  height:100%;
  margin: 0px;
  width: 100%;
}
.resume_content_top {
  height: 60px;
  background: #4796F8;
}
.resume_content_top  i {
  font-size: 1.8rem;
  float: left;
  margin: 1rem 0 1rem 1rem;
}
.resume_content_top span {
  float: left;
  line-height: 1rem;
  margin: 1.2rem 1rem 1rem 0rem;
  font-size: 18px;
  color: white;
}
.resume_content_top img {
  float: left;
  height:1rem;
  margin: 1.2rem 1rem 1rem 2rem;
}
.form_wrap{
  background: #fff;
  box-shadow: 3px 3px 3px 3px #eee;
  margin-top: 1rem;
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
.el-form-item {
  margin: 2px;
}
</style>
