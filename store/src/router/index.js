import Vue from 'vue'
import Router from 'vue-router'
// 首页
import home from '@/components/home'
// 列表详情
import list from '@/components/list'
// 登录业
import login from '@/components/login'
// 注册页面
import register from '@/components/register'
import homeDetail from '@/components/home/homeDetail'
import kind from '@/components/home/kind'
import car from '@/components/home/car'
import my from '@/components/home/my'
import myAddress from '@/components/myAddress'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:home,
      redirect:'/homeDetail',
      children:[
        {
          path: '/homeDetail',
          name:'homeDetail',
          component:homeDetail
        },
        {
          path: '/kind',
          name:'kind',
          component:kind
        },
        {
          path: '/car',
          name:'car',
          component:car
        },
        {
          path: '/my',
          name:'my',
          component:my
        }
      ]
    },
    {
      path: '/list',
      name:'list',
      component:list
    },
    {
      path: '/login',
      name:'login',
      component:login
    },
    {
      path: '/register',
      name:'register',
      component:register
    },
    {
      path: '/myAddress',
      name:'myAddress',
      component:myAddress
    }
  ]
})
