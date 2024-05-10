<template>
  <div class="fixed top-4 right-4">
    <input type="checkbox" id="toggle" class="sr-only" v-model="isChecked" />
    <label for="toggle" class="flex items-center cursor-pointer">
      <div class="relative w-16 h-8 bg-gray-300 rounded-full p-1">
        <div
          class="absolute left-1 top-1 bg-white rounded-full shadow-md transition-transform"
          :class="{
            'translate-x-full': !isChecked,
            'translate-x-0': isChecked,
          }"
        ></div>
        <div
          class="absolute right-1 top-1 bg-white rounded-full shadow-md transition-transform"
          :class="{
            'translate-x-0': !isChecked,
            'translate-x-full': isChecked,
          }"
        ></div>
        <div
          class="absolute top-0 left-0 bottom-0 w-9 bg-blue-500 rounded-full shadow-md transition-transform"
          :class="{
            'translate-x-full': !isChecked,
            'translate-x-0': isChecked,
          }"
        ></div>
      </div>
    </label>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isChecked = ref(store.state.isChecked);
watch(isChecked, (newValue, _) => {
  store.commit("toggleRadio", newValue);
});
</script>
