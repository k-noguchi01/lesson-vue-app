<template>
  <div>
    <div v-if="showFlag === 0" class="flex justify-between">
        <!-- カード1の内容 -->
        <div @click="changeShowFlag(SHOW_RANDOM_STORE)" class="flex mr-7 justify-center bg-sky-100 cursor-pointer hover:shadow-md items-center p-4 h-72 w-72 rounded-full">
        <p class="text-center">お店を選ぶ</p>
        <font-awesome-icon :icon="['fas', 'shop']" />
      </div>
        <!-- カード2の内容 -->
        <div @click="changeShowFlag(SHOW_REGIST_MENU)" class="flex hover:shadow-md ml-7 cursor-pointer  rounded-full bg-violet-100 justify-center items-center p-4 h-72 w-72">
          <p class="text-center">主食を選ぶ</p>
          <br>
          <font-awesome-icon :icon="['fas', 'bowl-rice']" />
        </div>
    </div>
<ShowRegister v-if="showFlag===2" />
<hotpepperSelect v-if="showFlag===1" />
<div v-if="showFlag!==0">
  <a @click="initShowFlag" class="cursor-pointer mt-5 hover:text-gray-400"><font-awesome-icon class="mr-2" :icon="['fas', 'arrow-left']" />back...</a>
</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ShowRegister from "./ShowRegister.vue"
import  HotpepperSelect from "./HotpepperSelect.vue"
const SHOW_RANDOM_STORE:number=1
const SHOW_REGIST_MENU:number=2
const showFlag = ref<number>(0);
const changeShowFlag = (compNum:number):void => {
  showFlag.value = compNum;
};
const initShowFlag = ():void=>{
  showFlag.value=0;
}
</script>
<style>
.show-content {
  opacity: 0.7;
}
</style>
