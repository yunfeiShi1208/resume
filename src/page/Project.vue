<template>
  <div>
    <div class="resume">
      <div class="resume_content">
        <el-row class="resume_content_top">
          <img src="./imgs/icon1.png" style="height:1rem;cursor:pointer;" @click="backBtn">
          <span>工作及项目</span>
        </el-row>
        <el-row class="form_wrap" style="height:auto;padding:0rem 0rem 2rem 0rem">
          <proTable ref='projectTable' :tableData='tableData'></proTable>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import proTable from '../components/proTable'
export default {
  name: 'Project',
  components: {
    proTable
  },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.tableData = [
      {
        feild1: '浦发一体化项目管理平台',
        feild2: `1.	使用VS Code编辑器、Git版本控制系统、YApi接口管理平台等工具，在项目中主要负责前端页面开发、配合后端进行接口联调等工作，应用了Vue.js框架、CSS、Bootstrap、JavaScript等；2.	在项目中负责开发了首页菜单组件，用户帮助页面，个人信息页面，以及商务会议管理，项目投产，项目决算，年度维护任务集，项目月报，项目度量，系统变更等模块。实现了对各模块的流程管理，主要包括申请、流转、审核、编辑、退回、取回、撤销等操作。其中，在项目度量模块引入了ECharts图表，增强了页面的数据可视化表达；3.	在模块开发中，提高了专业技能，增强了对需求的理解能力以及与需求方的沟通能力，不断提高与后端的对接效率`,
      }, {
        feild1: '苏州银行 app在线客服',
        feild2: '1. 负责跟进需求，制定计划，搭建Vue框架，开发并调试苏州银行app移动端页面、页面自适应移动端屏幕尺寸，实现在线客服模块功能，功能包括广告区展示、快捷入口、问题列表、人工跳转，应用Axios请求接口；2. 远程调试jsp页面，完成客服页面功能优化',
      }, {
        feild1: 'iJep项目',
        feild2: '扩展初代项目的功能，使其适应新增的应用需求',
      }, {
        feild1: '太平保险质检项目',
        feild2: '完成项目初期模态框、时间等组件及功能的实现',
      }, {
        feild1: '无人银行项目',
        feild2: '筹备阶段项目，根据原型图实现功能页面，独立完成demo演示页面',
      }, {
        feild1: '南京银行项目',
        feild2: '对于已完成的代码进行维护，修改测试bug',
      }
    ]
    this.$nextTick(function(){
      this.$refs.projectTable.refreshForm()
    })
    // this.refreshForm(this.pageData)
  },
  methods: {
    // 返回菜单
    backBtn () {
      this.$router.push('/')
    },
    // // 列表显示条数更改
    // handleSizeChange (val) {
    //   this.pageData.pageSize = val
    //   this.refreshForm(this.pageData)
    // },
    // // 列表页码更改
    // handleCurrentChange (val) {
    //   this.pageData.pageNum = val
    //   this.refreshForm(this.pageData)
    // },
    // //刷新列表
    // refreshForm (val) {
    //   this.tableDataShow = []
    //   for (let i = (val.pageNum - 1) * val.pageSize; i < this.total && i < val.pageNum * val.pageSize; i++) {
    //     this.tableDataShow.push(this.tableData[i])
    //   }
    // },
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
.el-form--inline .el-form-item {
  display: inline-block;
  margin-right: 0px;
  vertical-align: top;
}
.el-form-item {
  margin-bottom: 14px;
}
.el-table .cell {
  text-overflow: ellipsis;
  white-space: nowrap !important;
}
</style>
