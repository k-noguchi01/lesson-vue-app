<template>
  <div>
    <div v-if="showFlag === 0" class="flex justify-between">
      <div
        @click="changeShowFlag(1)"
        class="opacity-70 bg-sky-100 cursor-pointer hover:shadow-md h-72 mx-4 mb-4 md:mb-0 bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- カード1の内容 -->
        <div class="flex justify-center items-center p-4 h-72 w-72">
          <p class="text-center">Select Random Store?</p>
        </div>
      </div>
      <div
        @click="changeShowFlag(2)"
        class="opacity-70 cursor-pointer hover:shadow-md h-72 mx-4 mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- カード2の内容 -->
        <div class="flex bg-violet-100 justify-center items-center p-4 h-72 w-72">
          <p class="text-center">Select Register Menu?</p>
        </div>
      </div>
    </div>
<ShowRegister v-if="showFlag===2" />
<hotpepperSelect v-if="showFlag===1" />
<div v-if="showFlag!==0">
  <a @click="initShowFlag" class="cursor-pointer mt-5 hover:text-gray-400">back...?</a>
</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ShowRegister from "./ShowRegister.vue"
import HotpepperSelect from "./HotpepperSelect.vue"
const showFlag = ref(0);
const changeShowFlag = (compNum) => {
  showFlag.value = compNum;
  console.log(showFlag.value);
};
const initShowFlag = ()=>{
  showFlag.value=0;
}
</script>
<style>
.show-content {
  opacity: 0.7;
}
</style>
