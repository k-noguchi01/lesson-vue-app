<template>
  <div class="inner-content">
    <h1 class="text-3xl py-3 mt-4">Register a Menu</h1>
    <div class="flex justify-conter w-auto">
      <div class="justify-items-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              what's the stape food?
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
              class="add-button hover:bg-white text-white blue border-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            meun
            </label>
        <div v-for="(obj,index) in store.state.registMenues"
          :key="index"
          @click="onTouchDeleteMenu(index)"
        >
        <p
          v-for="(value,index) in obj"
          :key="index"
          :class="[
            'px-4 py-2 rounded-md animate-slide-in-left',
          ]"
        >
          {{ value }}
        </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {useStore} from "vuex"
const inputMenu = ref("");

const store = useStore()
console.log(store.state.registMenues[0]);

const onAddMenu=()=> {
  if(inputMenu!==""){
    store.commit('addMenu',inputMenu);
    console.log(store.state.registMenues);
    inputMenu.value = "";
    alert("successful");
    saveFileForJson()
  }
}
const onTouchDeleteMenu=(index)=>{
  console.log(index);
  store.commit('deleteMenu',index)
}
const saveFileForJson=()=>{
  const jsonData = store.state.registMenues;
  console.log(JSON.stringify(jsonData));
  const blob = new Blob([JSON.stringify(jsonData)],null,' ')
  const link = document.createElement('a')
  link.href=URL.createObjectURL(blob)
  link.download='exportDta.json'
  link.click();
  link.remove();
}
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
.add-button{
  background:linear-gradient(90deg,#66b6ea,#8743ff);
}
</style>
