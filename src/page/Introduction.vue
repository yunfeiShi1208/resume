<template>
    <div class="resume">
      <div class="resume_content">
        <el-row class="resume_content_top">
          <img src="./imgs/icon1.png" style="height:1rem;cursor:pointer;" @click="backBtn">
          <span>个人简历</span>
          <span style="float:right;">你好，BITO！</span>
        </el-row>
        <el-row class="form_wrap" style="position: fixed;height:auto;bottom:0;top:3rem;left:8px;right:8px;">
          <el-col :span="8" style="height:100%;padding:0px;border: 12px solid #eee;padding:0px">
            <div style="width:100%;height:100%;min-height:350px;border-radius:5px;">
              <div style="height:3rem;border-bottom: 1px solid #EEEEEE">
                <div style="line-height:3rem;font-size:18.4px;" class="right-type-light"><img src="./imgs/icon16.png" style="height:1rem;margin: 0 0.5rem;">基本信息</div>
              </div>
              <div style="margin: 0 1rem;height:55%;overflow-y:auto;">
                <div>
                  <div class="table-left">姓名：{{tableData.feild1}}</div>
                  <div class="table-left">性别：{{tableData.feild2}}</div>
                  <div class="table-left">出生年月：{{tableData.feild3}}</div>
                  <div class="table-left">工作年限：{{tableData.feild4}}</div>
                  <div class="table-left">籍贯：{{tableData.feild5}}</div>
                  <div class="table-left">政治面貌：{{tableData.feild6}}</div>
                  <div class="table-left">现任职务：{{tableData.feild7}}</div>
                  <div class="table-left">手机号码：{{tableData.feild8}}</div>
                  <div class="table-left">电子邮箱：{{tableData.feild9}}</div>
                </div>
              </div>
              <div style="height:3rem;border-top: 12px solid #eee;border-bottom: 1px solid #EEEEEE">
                <div style="margin:1rem 0;font-size:18.4px;" class="right-type-light"><img src="./imgs/icon5.png" style="height:1rem;margin: 0 0.5rem;">教育相关</div>
              </div>
              <div style="margin: 0 1rem;height:25%;overflow-y:auto;">
                <div>
                  <div class="table-left">学历：{{tableData.feild10}}</div>
                  <div class="table-left">本科院校：{{tableData.feild11}}</div>
                  <div class="table-left">专业：{{tableData.feild12}}</div>
                  <div class="table-left">英语等级：{{tableData.feild13}}</div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8" style="height:100%;padding:0px;border-top: 12px solid #eee;border-bottom: 12px solid #eee;">
            <div ref="lefttop" style="width:100%;height:59%;border-radius:5px;">
              <div ref="lefttop1" style="height:3rem;border-bottom: 1px solid #EEEEEE">
                <div style="float:left;margin:1rem 0;font-size:18.4px;" class="right-type-light"><img src="./imgs/icon6.png" style="height:1rem;margin: 0 0.5rem;">IT技能</div>
              </div>
              <div style="clear:both;">
                <axis :echartstyle="echartstyle" ref="axis"></axis>
              </div>
            </div>
            <div style="width:100%;height:34%;border-top: 12px solid #eee;">
              <div style="height:3rem;border-bottom: 1px solid #EEEEEE;">
                <div style="float:left;margin:1rem 0;font-size:18.4px;" class="right-type-light"><img src="./imgs/icon14.png" style="height:1rem;margin: 0 0.5rem;">工作经验</div>
              </div>
              <div style="width:100%;margin: 0;height:83%;overflow-y:auto;">
                <div style="width:8rem;height:1.5rem;background:#4796F8;border-radius:0px 16px 16px 0px;color:white;padding:0 1rem">2018年7月-至今</div>
                <div style="width:80%;">
                  <div class="line" style="color:#989898;border-left: 1px solid #CECECE;padding: 0 0 0 2rem;margin:0.5rem 1rem 0 1rem;">{{hisData.feild1}}</div>
                  <div class="line" style="color:#333333;font-size:20px;"><div style="float:left;width:0.5rem;height:0.5rem;border:2px solid #CECECE;border-radius:50%;margin:1.15rem 1.7rem 1.15rem 0.65rem;"></div>{{hisData.feild2}}</div>
                  <div class="line" style="color:#989898;border-left: 1px solid #CECECE;padding: 0 0 0 2rem;margin:0 1rem;">{{hisData.feild3}}</div>
                </div>
              </div>
            </div>
          </el-col>
           <el-col :span="8" style="height:100%;padding:0px;border: 12px solid #eee;">
            <div ref="centertop" style="width:100%;height:40%;">
              <div ref="centertop1" style="height:3rem;border-bottom: 1px solid #EEEEEE">
                <div style="line-height:3rem;font-size:18.4px;" class="right-type-light"><img src="./imgs/icon10.png" style="height:1rem;margin: 0 0.5rem;">项目经验<span style="float:right;"><el-button type="primary" size="mini" style="float:left;margin:0.5rem;" @click="projectBtn">详情</el-button></span></div>
              </div>
              <ul class="ul-better" :style="ulstyle">
                <li class="li-margin">1、浦发一体化项目管理平台</li>
                <li class="li-margin">2、苏州银行 app在线客服</li>
                <li class="li-margin">3、iJep项目</li>
                <li class="li-margin">4、太平保险质检项目</li>
                <li class="li-margin">5、无人银行项目</li>
                <li class="li-margin">6、南京银行项目</li>
              </ul>
            </div>
            <div style="height:3rem;border-top: 12px solid #eee;border-bottom: 1px solid #EEEEEE">
              <div style="margin:1rem 0;font-size:18.4px;" class="right-type-light"><img src="./imgs/icon15.png" style="height:1rem;margin: 0 0.5rem;">自我评价</div>
            </div>
            <div style="width:100%;height:48%;">
              <div id="speakwindow" class="speak_window" style="padding-top: 10px;box-sizing: border-box;overflow-y:scroll;height:100%;">
                <div id="speakbox" class="speak_box">
                  <div v-for="item in speakArray" :key="item.ind" :value="item.ind">
                    <div v-if="item.me" class="answer">
                      <div class="heard_img left"><img src="./imgs/image2.png"></div>
                      <div class="answer_text clear">
                        <p>{{item.me}}</p>
                      </div>
                    </div>
                    <div v-if="item.client" class="question">
                      <div class="heard_img right"><img src="./imgs/image1.png"></div>
                      <div class="question_text clear">
                        <p>{{item.client}}</p>
                      </div>
                    </div>
                    <div v-if="item.ind=='14'" class="question">
                      <div class="heard_img right"><img src="./imgs/image1.png"></div>
                      <div class="question_text clear">
                        <p v-html="msg">{{item.client}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
import axis from '../components/axis'
export default {
  name: 'Introduction',
  components: {
    axis
  },
  data () {
    return {
      echartstyle: {
        flex: '1',
        width: '100%',
        minHeight: '150px'
      },
      axisData: [90, 90, 90, 85, 80, 85, 90, 80, 80, 70, 30, 30],
      istrue: false,
      ulstyle: {
        height: 'inherent'
      },
      dynamicTags: [],
      inputValue: '',
      tableData: {},
      hisData: {},
      speakArray: [],
      speakArrayData: [{'me': '工作认真、负责，态度端正，有良好的团队精神和集体荣誉感', 'ind': '1'},{'me': '谦虚好学、学习能力强，擅长学习新技能，乐于接受新事物', 'ind': '2'},{'me': '有良好的逻辑思维能力，善于分析，能高效率调试解决问题', 'ind': '3'},{'me': '有代码洁癖、书写习惯良好', 'ind': '4'},{'me': '有爱心，乐于助人', 'ind': '5'}]
    }
  },
  mounted () {
    var h = this.$refs.lefttop.offsetHeight - this.$refs.lefttop1.offsetHeight - 10
    this.echartstyle.minHeight = h + 'px'
    this.$nextTick(_ => {
      this.$refs.axis.drawAxis(this.axisData)
    })
    var h1 = this.$refs.centertop.offsetHeight - this.$refs.centertop1.offsetHeight - 10
    this.ulstyle.height = h1 + 'px'
    this.showData() // 展示数据
    setTimeout(this.showData, 2000)
    setTimeout(this.audioPlay, 2000)
    setTimeout(() => { this.displayChat(0) }, 1000)
    // setTimeout(() => {
    //   this.hotShow = false
    //   this.hotIndex = 0
    // }, 4000)
    setTimeout(() => { this.displayChat(1) }, 2000)
    setTimeout(() => { this.displayChat(2) }, 3000)
    setTimeout(() => { this.displayChat(3) }, 4000)
    setTimeout(() => { this.displayChat(4) }, 5000)
  },
  methods: {
    backBtn () {
      this.$router.push('/')
    },
    projectBtn () {
      this.$router.push('/Project')
    },
    showData () {
      this.tableData = {
        feild1: '史芸菲',
        feild2: '女',
        feild3: '1996.12',
        feild4: '2年',
        feild5: '山东省日照',
        feild6: '团员',
        feild7: '设计开发工程师',
        feild8: '13082791283',
        feild9: '1176813911@qq.com',
        feild10: '全日制本科',
        feild11: '2014.9-2018.6 山东科技大学',
        feild12: '计算机科学与工程学院 物联网工程',
        feild13: 'CET6'
      }
      this.hisData = {
        feild1: '项目所属行业：软件开发，金融解决方案',
        feild2: '上海文思海辉金信软件有限公司',
        feild3: '工作职责描述：参与前端开发设计工作,理解需求，实现PC端和移动端的前端开发，解决浏览器兼容问题，实现业务逻辑，配合后端调试接口，优化性能'
      }
    },
    // 内容展示
    displayChat (i) {
      this.speakArray.push(this.speakArrayData[i])
      setTimeout(this.to_bottom, 1000)
    },
    // 滚动至底端
    to_bottom () {
      if (document.getElementById('speakbox').scrollHeight) {
        var h = document.getElementById('speakbox').scrollHeight
        document.getElementById('speakbox').scrollTop = h
        document.getElementById('speakwindow').scrollTop = h
      }
      // $('.speak_box,.speak_window').animate({scrollTop: height}, 500)
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
  margin: 0;
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
  // box-shadow: 3px 3px 3px 3px #eee;
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
  // font-weight: bold;
}
.resume_content_top img {
  float: left;
  height:1rem;
  margin: 1.2rem 1rem 1rem 2rem;
}
.form_wrap{
  background: #fff;
  box-shadow: 3px 3px 3px 3px #eee;
  margin-top: 18px;
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
.el-tag {
  margin: 2rem 10px 0 2rem;
  font-size: 14px;
}
.button-new-tag {
  margin-left: 10px;
  margin-top: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-top: 10px;
  margin-left: 10px;
  vertical-align: bottom;
}
.table-left {
  color: #333333;
  float:left;
  width: 100%;
  height:3rem;
  line-height: 3rem;
  font-size: 18px;
  // font-weight: bolder;
  vertical-align: middle;
  // border-top: 1px solid #ddd;
  text-align: left;
  vertical-align: middle;
}
.table-right {
  float:left;
  width: 71%;
  min-height:1.5rem;
  line-height:1.5rem;
  font-size: 1rem;
  vertical-align: middle;
  // border-top: 1px solid #ddd;
  text-align: right;
  word-wrap:break-word;
}
.line {
  width:100%;
  height:auto;
  line-height:2.5rem;
  font-size: 18px;
  word-wrap:break-word;
  color: #333333;
}
li {
  list-style-type:none;
}
.li-margin {
  font-size: 18px;
  // margin: 1.5rem 0;
  height: 3rem;
  color: #333333;
}
.red {
  color: red;
}
.ul-better {
  margin:0.3rem;
  overflow-y:auto;
  // border:1px solid rgba(231,231,231,1);
  padding:0rem;
  word-wrap:break-word;
}
.i-better {
  font-size: 1.8rem;
  margin-left:1rem;
  vertical-align: middle;
}
::-webkit-scrollbar {//滚动条的宽度
  width:9px;
  height:9px;
}
.el-input {
  width: 230px;
}
.el-input__inner {
  border-radius: 20px !important;
}
.el-tag {
  border-radius: 16px;
}
.question,.answer{margin-bottom:1rem;}
.question{text-align:right;}
.question>div{display:inline-block;}
.question_text,.answer_text{box-sizing:border-box;position:relative;display:table-cell;min-height:30px;}
// .question_text{padding-right:20px;}
// .answer_text{padding-left:20px;}
.answer_text{margin-left:20px;border-radius:0px 30px 30px 30px;border: 1px solid #4796F8;}
.question_text{border-radius:30px 0px 30px 30px;background-color: #4796F8;}
.question_text p,.answer_text p{border-radius:30px 0px 30px 30px;padding:5px 20px;margin:0;font-size:18px;line-height:28px;box-sizing:border-box;vertical-align:middle;display:table-cell;height:40px;word-wrap:break-word;}
.answer_text p{max-width: 290px; color:#4796F8;}
.question_text p{background:#4796F8;text-align:left;max-width: 220px;color:white}
.question_text i,.answer_text i{width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;position:absolute;top:25px;}
.answer_text i{border-right:10px solid #fff;left:10px;}
.question_text i{border-left:10px solid #42929d;right:10px;}
.answer_text p a{color:#42929d;display:inline-block;}
.heard_img{height:2rem;width:2rem;border-radius:5px;overflow:hidden;background:#fff;padding:5px;margin: -0.5rem 0.5rem;}
.heard_img img{width:100%;height:100%}
.saying{position:fixed;bottom:30%;left:50%;width:120px;margin-left:-60px;display:none;}
.saying img{width:100%;}
.speak_box{padding:10px;}
.left{float:left;}
.right{float:right;}
.clear{clear:both;}
</style>
