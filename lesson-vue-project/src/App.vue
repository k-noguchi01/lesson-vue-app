<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import ShowRandomMenu from "./components/ShowRandomMenu.vue";
import InputMenu from "./components/InputMenu.vue";
import Header from "./components/header.vue";
import { changeXml2Json } from "./utils/convert_data";
const largeAreaData = ref([]);
const selectedOption = ref("");
const targetStore = ref("");
const api_key = ref(import.meta.env.VITE_APP_API_KEY);
const selectedShop = ref([]);
const isMenuCliecked = ref(false);
const preferenceOptionChange = async () => {
  const ramdomCount = getRamdomNumber(1, 100);
  const ramdomStart = getRamdomNumber(1, 100);
  const requestGourmentData = await getDataByAxios("gourmet", api_key.value, {
    large_area: selectedOption.value._text,
    start: ramdomStart,
    count: ramdomCount,
  });
  targetStore.value = getRamdomNumberByGourmentData(
    changeXml2Json(requestGourmentData).results.shop,
    ramdomCount
  );
  selectedShop.value.push(targetStore.value);
  console.log(selectedShop.value);
};
const getRamdomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + 1;
};
const getRamdomNumberByGourmentData = (gourmentData, ramdomCount) => {
  console.log(gourmentData);
  console.log(ramdomCount);
  return gourmentData[getRamdomNumber(1, ramdomCount)];
};
const clickShop = () => {
  isMenuCliecked.value = !isMenuCliecked.value;
  console.log(isMenuCliecked.value);
};
const getDataByAxios = async (type, key, option = {}) => {
  const base_url = `http://webservice.recruit.co.jp/hotpepper/${type}/v1/?key=${key}`;
  let option_param = "";
  if (option) {
    Object.entries(option).forEach(([key, value]) => {
      option_param += `&${key}=${value}`;
    });
  }
  console.log(base_url + option_param);
  const resultsData = await axios.get(base_url + option_param);
  return resultsData;
};
(async () => {
  console.log("start created");
  axios.defaults.withCredentials = false;
  const resultsData = await getDataByAxios("large_area", api_key.value);
  const jsonData = changeXml2Json(resultsData);
  jsonData.results.large_area.forEach((element) => {
    largeAreaData.value.push(element);
  });
  console.log("created end");
})();

const store = useStore();
</script>
<template>
  <div>
    <form class="max-w-md mx-auto text-left">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an large area</label
      >
      <select
        id="countries"
        class="bg-gray-50 border w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="selectedOption"
        @change="preferenceOptionChange"
      >
        <option selected>Choose a country</option>
        <option
          v-for="prefecture in largeAreaData"
          :value="prefecture.code"
          :key="prefecture.code"
        >
          {{ prefecture.name._text }}
        </option>
      </select>
      <div
        class="bg-white inline-block shadow-md rounded-lg w-auto p-3 mt-2"
        v-if="targetStore !== ''"
      >
        <p class="mb-2">
          <a
            href="#"
            @click="clickShop"
            class="text-blue-500 hover:underline"
            >{{ targetStore.name._text }}</a
          >
        </p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-3 mt-2" v-if="isMenuCliecked">
        <p class="mb-2">
          {{ targetStore.access._text }}
        </p>
      </div>
    </form>

    <Header />
    <InputMenu v-if="store.state.isChecked" />
    <ShowRandomMenu v-else />
  </div>
</template>
<style scoped></style>
