<template>
  <div>
    <form class="max-w-md mx-auto text-left">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ><font-awesome-icon :icon="['fas', 'map']" class="mr-2" />Select an large area</label
      >
      <select
        id="countries"
        class="bg-gray-50 border w-48 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="selectedLargeAreaCode"
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
        v-if="selectedShop.length!==0"
     >
        <p class="mb-2">

<font-awesome-icon :icon="['fas', 'champagne-glasses']" class="mr-3" />
          <a
            v-bind:href="selectedShop[0].urls.pc._text"
            class="text-blue-500 hover:underline"
            target="_blank"
            >{{ selectedShop[0].name._text}}</a
          >
        </p>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { changeXml2Json } from "../utils/convert_data";
import { ref } from "vue";
import axios from "axios";
const largeAreaData = ref<Object[]>([]);
const selectedLargeAreaCode = ref<string>("");
const selectedShop = ref<Object[]>([]);
const api_key:string = import.meta.env.VITE_APP_API_KEY;
const GET_DATA_MIN_COUINT:number= 1;
const GET_DATA_MAX_COUINT:number = 100;
const preferenceOptionChange = async ():Promise<void>=> {
  const ramdomCount:number = getRamdomNumber(GET_DATA_MIN_COUINT, GET_DATA_MAX_COUINT);
  const ramdomStart:number = getRamdomNumber(GET_DATA_MIN_COUINT, GET_DATA_MAX_COUINT);
  const requestGourmentData = await getDataByAxiosByHotpepper(
    "gourmet",
    api_key,
    {
      large_area: selectedLargeAreaCode.value._text,
      start: ramdomStart,
      count: ramdomCount,
    }
  );
  selectedShop.value.splice(0)
  selectedShop.value.push(getRamdomNumberByGourmentData(
    changeXml2Json(requestGourmentData).results.shop,
    ramdomCount
  ));
};
const getRamdomNumber = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min)) + 1;
};

const getRamdomNumberByGourmentData = (gorumentData, ramdonmCount:number) => {
  return gorumentData[getRamdomNumber(1, ramdonmCount)];
};
const getDataByAxiosByHotpepper = async (type:string, key:string, option = {}) => {
  const base_url:string = `https://webservice.recruit.co.jp/hotpepper/${type}/v1/?key=${key}`;
  let option_param:string = "";
  if (option) {
    Object.entries(option).forEach(([key, value]) => {
      option_param += `&${key}=${value}`;
    });
  }
  const resultsData = await axios.get(base_url + option_param);
  return resultsData;
};
(async()=>{
  axios.defaults.withCredentials = false;
  const resultsData = await getDataByAxiosByHotpepper("large_area", api_key);
  const jsonData = changeXml2Json(resultsData);
  jsonData.results.large_area.forEach((element) => {
    largeAreaData.value.push(element);
  });
})();
</script>
<style></style>
