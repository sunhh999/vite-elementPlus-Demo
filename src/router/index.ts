import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const Layout = () => import("@/layout/index.vue")

const routes: Array<RouteRecordRaw> = [
	{
		path: "/login",
		name: "Login",
		meta: {
			title: "登录"
		},
		component: () => import("@/views/login/index.vue")
	},
	{
		path: "/",
		component: Layout,
		alias: "/home",
		redirect: "/home/index",
		children: [
			{
				path: "/home/index",
				component: () => import("@/views/home/index.vue")
			}
		]
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
