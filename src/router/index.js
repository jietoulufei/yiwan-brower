import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login", //路由名称
    component: login
  },
  {
    path: "/",
    name: "layout",
    redirect: "/xu",
    component: () => import("@/components/layout.vue"), //路由懒加载
    children: [
      {
        path: "/xu",
        component: () => import("@/views/xu"),
        meta: {
          //用于诸如面包屑导航 需要获取路由对象里的数据 {{$route.meta.title}}
          title: "序言",
          father: "序言"
        }
      },
      {
        path: "/zonglan",
        component: () => import("@/views/zonglan"),
        meta: {
          title: "总览",
          father: "编程技术"
        }
      },
      {
        path: "/qianduan",
        component: () => import("@/views/qianduan"),
        meta: {
          title: "前端",
          father: "编程技术"
        }
      },
      {
        path: "/houduan",
        component: () => import("@/views/houduan"),
        meta: {
          title: "后端",
          father: "编程技术"
        }
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    meta: {
      title: "404",
      father: "404"
    }
  },
  {
    path: "*", //代表任意路径 跳转404 一定要放在最下方
    redirect: "/404",
    component: () => import("@/views/404"),
    meta: {
      title: "404",
      father: "404"
    }
  }
];

const router = new VueRouter({
  mode: "hash", //不建议使用history 在Nginx会出现问题，刷新会出现404
  base: process.env.BASE_URL, //默认路径是'/'
  routes
});

export default router;
