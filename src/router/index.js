import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
// import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/DashBoard'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true }
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'DashBoard',
      component: DashBoard,
      children: [
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: { requiresAuth: true }
        }
      ],
    },
  ]
})
