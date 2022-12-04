import {createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "./Reducer/index";

const store= createStore(rootReducer);
console.log("store");

export default store;