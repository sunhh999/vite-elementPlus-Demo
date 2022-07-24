import { createApp } from "vue"
import Router from "./router"
import App from "./App.vue"
import Store from "./store"
import "./styles/main.scss"

import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// const app = createApp(App)

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(Store)
app.use(Router)
// el-plus icons
app.mount("#app")
