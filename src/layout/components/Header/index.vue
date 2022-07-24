<template>
	<div class="header-wrapper">
		<div class="menu-btn">
			<Icons name="alarmClock" size="18px" color="#000000" />
			<!-- <Icons name="Fold" size="18px" color="#000000" /> -->
			<Fold style="width: 25px; height: 25px" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Fold } from "@element-plus/icons-vue"
import Icons from "@/components/icons.vue"
</script>

<style lang="scss">
.header-wrapper {
	background: palegreen;
	height: $headNavHeight;

	.menu-btn {
		cursor: pointer;
	}
}
</style>
