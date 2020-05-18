import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Layout = () => import('@/views/layout/index')

/* Layout */

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/mainContent',
    children: [
      { path: 'mainContent', component: () => import('@/views/mainContent') },
      { path: 'UV-Vis', component: () => import('@/views/UV') },
      { path: 'history', component: () => import('@/views/history/index')},
      { path: 'performance', component: () => import('@/views/performance/index')},
      { path: 'intensity', component: () => import('@/views/intensity/index')},
      { path: 'pedestal', component: () => import('@/views/pedestal/index')},
      { path: 'settings', component: () => import('@/views/settings/index')},
      { path: 'help', component: () => import('@/views/help/index')},
      { path: 'chemometric', component: () => import('@/views/chemometric/index')},
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

