<template>
	<el-container class="layout-wapper">
		<Header />
		<el-container>
			<SideBar />
			<el-container class="content-wapper">
				<el-main>
					<el-button type="primary">Primary</el-button>
					<router-view></router-view>
				</el-main>
				<Footer></Footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { Header, SideBar, Footer } from "./components/index"
</script>

<style scoped lang="scss">
.layout-wapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.el-main {
	padding: 0;
	// el-header
	// el-footer
	// height: calc(100vh - header -footer);
	height: calc(100vh - $headNavHeight - $footerHeight);
}

.content-wapper {
	display: flex;
	flex-direction: column;
}
</style>
