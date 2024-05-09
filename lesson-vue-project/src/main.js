import { createApp } from "vue";
import { createStore } from "vuex";
import jsonData from "../public/data/data.json";
import "./style.css";
import App from "./App.vue";
import "./index.css";

const store = createStore({
  state() {
    return {
      registMenues: jsonData,
      isChecked: true,
    };
  },
  mutations: {
    addMenu(state, menu) {
      console.log(menu.value);
      let tmp = {
        "menu-name": menu.value,
      };
      state.registMenues.push(tmp);
    },
    deleteMenu(state, index) {
      state.registMenues.splice(index, 1);
    },
    toggleRadio(state, newValue) {
      state.isChecked = newValue;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
