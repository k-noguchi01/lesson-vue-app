import { createApp } from "vue";
import { createStore } from "vuex";
import jsonData from "../public/data/data.json";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
/* font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  fas
} from "@fortawesome/free-solid-svg-icons";

library.add(fas);

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
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount("#app");
