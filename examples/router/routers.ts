/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory vue2中的路由模式
 *                      这里的是hash模式，还可以是createWebHistory等
 * RouterRecordRaw 要添加的路由记录，也可以说是routes的ts类型
 */

import { createRouter, createWebHashHistory,RouteRecordRaw } from "vue-router"

const routes:Array<RouteRecordRaw> =[
  {
    path: "/",
    name: "Home",
    component: () => import("../view/index.vue")
  },
  {
    path:"/button",
    name:"Button",
    component: () => import("../view/button/button.vue")
  },
  {
    path: "/icon",
    name: 'Icon',
    component: () => import("../view/icon/icon.vue")
  },
  {
    path: "/row",
    name: "Row",
    component: () => import("../view/row/row.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router