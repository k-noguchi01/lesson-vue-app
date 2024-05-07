<template>
    <div>
 <h1 class="text-3xl py-3 mt-4">入力画面</h1>
    <div class="flex justify-conter w-auto">
      <div class="grid justify-items-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              主食
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="例）オムライス"
              v-model="inputMenu"
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="onAddMenu"
            >
              登録
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
</template>
<script setup>
import {ref} from "vue";

const inputMenu = ref("");
function onAddMenu() {
  registMenues.value.push(inputMenu.value);
  inputMenu.value = "";
  alert("登録完了");
  console.log(registMenues);
  console.log(isEffect.value);
}
</script>