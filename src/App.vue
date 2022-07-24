<template>
	<div id="app">
		<el-config-provider :locale="locale">
			<router-view></router-view>
		</el-config-provider>
	</div>
</template>

<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn"
const locale = zhCn
</script>

<style scoped>
#app {
	width: 100%;
	height: 100%;
}
</style>
