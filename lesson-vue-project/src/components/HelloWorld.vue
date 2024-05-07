<script setup>
import { ref } from 'vue'
// msg引数を受け取る
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
