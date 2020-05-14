<template>
  <div :style="echartstyle" id="axis"></div>
</template>
<script>
  export default {
    name: 'axis',
    props: {
      echartstyle: Object
    },
    data () {
      return {
        axisData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    mounted () {
      this.drawAxis(this.axisData)
    },
    methods: {
      drawAxis (axisData) {
        var myChart = this.$echarts.init(document.getElementById('axis'), 'light')
        myChart.resize()
        var option = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            left: 'right',
            data: ['我的技能']
          },
          radar: [
            {
              indicator: [
                {text: 'Vue.js、脚手架', max: 100},
                {text: 'Html5', max: 100},
                {text: 'CSS3', max: 100},
                {text: 'JavaScript', max: 100},
                {text: 'ES6', max: 100},
                {text: 'Jquery', max: 100},
                {text: 'Layui、Element', max: 100},
                {text: 'Echarts', max: 100},
                {text: '开发者工具', max: 100},
                {text: 'Git、svn', max: 100},
                {text: 'Oracle', max: 100},
                {text: 'Java', max: 100}
              ],
              radius: 100
            }
          ],
          series: [
            {
              type: 'radar',
              tooltip: {
                trigger: 'item'
              },
              areaStyle: {},
              data: [
                {
                  value: axisData,
                  name: '我的技能'
                }
              ]
            }
          ]
        }
        myChart.setOption(option, true)
      }
    }
  }
</script>
