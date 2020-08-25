import {combineReducers, createStore} from "redux";
import {counterReduce} from "./counterReduce";


const rootReducer = combineReducers({
	counter: counterReduce
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)