<script setup>
import Vuex, { useStore} from 'vuex';
import ShowRandomMenu from "./components/ShowRandomMenu.vue";
import InputMenu from "./components/InputMenu.vue";
import Header from "./components/header.vue";
import { onBeforeMount, onMounted } from 'vue';
onMounted(()=>{
  console.log("mounted");
})
onBeforeMount(()=>{
  console.log("before mount");
});

(()=>{
  console.log('Befoire create');
})();
const store = useStore()
</script>
<template>
  <div>
    <Header />
    <InputMenu v-if="store.state.isChecked"/>
    <ShowRandomMenu v-else />
  </div>
</template>
<style scoped>
</style>
