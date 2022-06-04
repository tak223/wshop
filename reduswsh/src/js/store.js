import { createStore } from "redux";
import { countReducer } from "./reducer/counterReducer";
const dvt =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store= createStore(countReducer,dvt)