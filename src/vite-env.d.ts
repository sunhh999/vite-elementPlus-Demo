/// <reference types="vite/client" />

// 18755191162 v
// chenchenzaichaoyang
declare module "*.vue" {
	import type { DefineComponent } from "vue"

	const component: DefineComponent<{}, {}, any>
	export default component
}
