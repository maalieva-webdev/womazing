import { createStore } from "redux"
// import todoReducer from "./reducer"
import carzinaReducer from "../storeTwo/reducer"

const store = createStore(carzinaReducer)

export default store