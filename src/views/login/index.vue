<template>
    <div>
        登录
        <el-button> 跳转测试 </el-button>
        <router-link :to="`/home?objData=${JSON.stringify(obj)}`">跳转测试</router-link>
        <!-- <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path></svg> -->
    </div>
</template>
ß
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

let obj = {
    id: 1,
    params: '费用'
}
// router.push(`home?objData=${JSON.stringify(obj)}`)

// window.location = 'http://www.xxx.com?objData=' + JSON.stringify(obj);
</script>

<style scoped></style>
