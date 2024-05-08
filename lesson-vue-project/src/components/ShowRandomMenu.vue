<template>
  <div class="max-w-lg mx-auto">
    <!-- 文言の表示エリア -->
    <h1 class="text-3xl py-3 mt-4">表示画面</h1>
    <div class="show-content bg-white shadow-md rounded-md p-4 mb-4">
      <p class="text-lg text-gray-800">{{ selectedItem }}</p>
    </div>
    <!-- ボタン -->
    <button
      @click="getRandomItemByRegistMenues"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      表示
    </button>
  </div>
</template>
<script setup>
import {ref} from "vue";
const registMenues = ref([]);
const selectedItem = ref(null);
function getRandomItemByRegistMenues() {
  selectedItem.value =
    registMenues.value[Math.floor(Math.random() * registMenues.value.length)];
}
</script>
<style>
 .show-content{
    opacity: 0.7;   
}
</style>