import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/index'
import Projects from '@/pages/project/index'
import ShowProject from '@/pages/project/show'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/project', name: 'Projects', component: Projects },
    { path: '/project/:id', name: 'ShowProject', component: ShowProject, props: true },
    { path: '/', name: 'Home', component: Home }
  ]
})
