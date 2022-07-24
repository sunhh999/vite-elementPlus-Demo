<script lang="ts">
import { defineComponent, computed, resolveComponent, CSSProperties, h } from "vue"
// import svg from "/@/components/icon/svg/index.vue"
// defineComponent 创建一个自定义组件
// computed 计算属性
// createVNode  创建一个虚拟DOM节点
// resolveComponent 按名称解析 component。
// CSSProperties 目前认为这是一个可以读取 css 参数的对象
export default defineComponent({
	name: "Icon",
	props: {
		name: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: "18px"
		},
		color: {
			type: String,
			default: "#000000"
		}
	},
	setup(props) {
		console.log(props)
		const { name, size, color } = props
		// console.log(size, color, name)
		// const iconStyle = computed((): CSSProperties => {
		// 	const { size, color } = props
		// 	let s = `${size.replace("px", "")}px`
		// 	return {
		// 		fontSize: s,
		// 		color: color
		// 	}
		// })
		// console.log(iconStyle, 123)
		// if (props.name.indexOf("el-icon-") === 0) {
		// 	return () => createVNode("el-icon", { class: "icon el-icon", style: iconStyle.value }, [createVNode(resolveComponent(props.name))])
		// }
		// console.log(h(`${name}`, { style: { fontSize: size, color: color } }))
		return () => h(`${name}`, { style: { fontSize: size, color: color } })
	}
})
</script>
