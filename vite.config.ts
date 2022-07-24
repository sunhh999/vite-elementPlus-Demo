import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

// import Icons from 'unplugin-icons/vite'

// import Icons from "unplugin-icons/vite"
// import IconsResolver from "unplugin-icons/resolver"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
	// 打包路径
	base: "./",
	plugins: [
		vue(),
		// Icons({ compiler: "vue3" }),
		AutoImport({
			imports: ["vue", "vue-router"],
			dts: "types/auto-import.d.ts",
			resolvers: [ElementPlusResolver()]
			// 自动导入图标组件
		}),
		Components({
			dirs: ["src/components"],
			dts: "types/components.d.ts",
			resolvers: [ElementPlusResolver()]
		})
	],
	css: {
		/* CSS 预处理器 */
		preprocessorOptions: {
			scss: {
				additionalData: '@import"src/styles/variables.scss";'
			}
		}
	},
	resolve: {
		// 配置路径别名
		alias: {
			"@/": resolve(__dirname, "src")
		}
	},
	server: {
		// 将此设置为 0.0.0.0 或者 true 将监听所有地址
		host: true,
		// 在开发服务器启动时自动在浏览器中打开应用程序
		open: true,
		// 指定开发服务器端口 如果端口已经被使用，Vite 会自动尝试下一个可用的端口
		port: 8080,
		proxy: {
			// 字符串简写写法
			// '/foo': 'http://localhost:4567',
			//  选项写法
			// '/api': {
			//     target: 'http://jsonplaceholder.typicode.com',
			//     changeOrigin: true,
			//     rewrite: path => path.replace(/^\/api/, ''),
			// },
			// 正则表达式写法
			// '^/fallback/.*': {
			//     target: 'http://jsonplaceholder.typicode.com',
			//     changeOrigin: true,
			//     rewrite: path => path.replace(/^\/fallback/, ''),
			// },
			//  使用 proxy 实例
			// '/api': {
			//     target: 'http://jsonplaceholder.typicode.com',
			//     changeOrigin: true,
			//     configure: (proxy, options) => {
			//      proxy 是 'http-proxy' 的实例
			//     },
			// },
			//  Proxying websockets or socket.io
			// '/socket.io': {
			//     target: 'ws://localhost:3000',
			//     ws: true,
			// },
		}
	}
})
