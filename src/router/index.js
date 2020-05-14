import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home.vue'
import Introduction from '@/page/Introduction'
import Project from '@/page/Project'
import showChart from '@/page/showChart'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      alias: '/home'
    },
    {
      path: '/Introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/showChart',
      name: 'showChart',
      component: showChart
    },
  ]
})
