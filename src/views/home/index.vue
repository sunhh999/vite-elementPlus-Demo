<template>
    <div>
        首页1
        <ArrowDownBold />
    </div>
</template>

<script setup lang="ts">
// import { useRouter } from "vue-router"
const router = useRouter()

onBeforeMount(() => {
    // JSON.parse(router.currentRoute.value.query)
    // console.log(this.$route.query)
    console.log(router.currentRoute.value.query)
})
</script>

<style scoped></style>
