<template>
  <div class="inner-content">
    <div class="flex justify-conter w-auto">
      <div class="justify-items-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              主食登録
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Ex）Omlette Rice"
              v-model="inputMenu"
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              class="add-button hover:opacity-80 border-none text-white blue font-bold border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="onAddMenu"
            >
              add menu
            </button>
          </div>
        </form>
      </div>
      <div
        class="bg-white shadow-md rounded ml-4 px-8 pt-6 pb-8 mb-4"
        v-if="store.state.registMenues.length !== 0"
      >
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
        <font-awesome-icon icon="fas fa-utensils" class="mr-1"/>
          meun
        </label>
        <div
          v-for="(obj, index) in store.state.registMenues"
          :key="index"
          @click="onTouchDeleteMenu(index)"
          class="flex box hover:bg-gray-50 rounded-md cursor-pointer justify-start"
        >
          <p
            v-for="(value, index) in obj"
            :key="index"
            :class="['px-4 py-2 rounded-md animate-slide-in-left']"
          >
          <font-awesome-icon :icon="['fas', 'drumstick-bite']" />
            {{ value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const inputMenu= ref<string>("");

const store = useStore();

const onAddMenu = ():void => {
  if (inputMenu.value !== "") {
    store.commit("addMenu", inputMenu);
    inputMenu.value = "";
    alert("successful");
  }
};
const onTouchDeleteMenu = (index:number):void => {
  store.commit("deleteMenu", index);
};
</script>
<style>
.main-content {
  background: url(../../img/43374.jpg);
}
.animate-slide-in-left {
  animation: slideInLeft ease 0.5s;
}
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.add-button {
  background: linear-gradient(90deg, #66b6ea, #8743ff);
}
</style>
