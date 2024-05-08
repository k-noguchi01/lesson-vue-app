import { createApp } from 'vue'
import {createStore} from 'vuex'
import jsonData from '../public/data/data.json'
import './style.css'
import App from './App.vue'
import "./index.css";

console.log(jsonData);

const store=createStore({
  state(){
    return {
      registMenues: jsonData
    }
  },
  mutations:{
    addMenu(state,menu){
    console.log(menu.value)
    let tmp={
        "menu-name":menu.value
    };
      state.registMenues.push(tmp);
    },
    deleteMenu(state,index){
        state.registMenues.splice(index,1)
    }
  }
})
console.log("create store");

const app=createApp(App)
app.use(store)
app.mount('#app')
