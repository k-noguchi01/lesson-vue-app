<script setup>
import { useStore } from "vuex";
import ShowRandomMenu from "./components/ShowRandomMenu.vue";
import InputMenu from "./components/InputMenu.vue";
import Header from "./components/header.vue";
import HotpepperSelect from "./components/HotpepperSelect.vue";
const store = useStore();
</script>
<template>
  <div>
    <Header />
    <InputMenu v-if="store.state.isChecked" />
    <ShowRandomMenu v-else />
  </div>
</template>
<style scoped></style>
