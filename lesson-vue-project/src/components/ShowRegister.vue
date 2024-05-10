<template>
  <div class="mx-auto">
    <!-- 文言の表示エリア -->

    <p class="text-3xl py-3 mt-4">What's for dinner today?</p>
    <div
      v-if="selectedItem !== null"
      class="show-content bg-white shadow-md rounded-md p-4 mb-4"
    >
      <p class="text-lg text-gray-800">{{ selectedItem["menu-name"] }}</p>
    </div>
    <!-- ボタン -->
    <button
      @click="getRandomItemByRegistMenues"
      class="px-4 py-2 font-bold text-blue-700 rounded-md border-1.5 hover:bg-white border-blue-300 hover:opacity-60 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:opacity-80 disabled:cursor-not-allowed"
    >
      get menu
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const selectedItem = ref("");
const getRandomItemByRegistMenues = () => {
  selectedItem.value =
    store.state.registMenues[
      Math.floor(Math.random() * store.state.registMenues.length)
    ];
};
</script>
<style></style>
