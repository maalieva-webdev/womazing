import { combineReducers, createStore } from "redux"
// import todoReducer from "./reducer"
import carzinaReducer from "../storeTwo/reducer"
import todoReducer from "./reducer"


const rootReduser=combineReducers({
    todoReducer,
    carzinaReducer
})

const store = createStore(rootReduser)

export default store