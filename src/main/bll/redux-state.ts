import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import { appReducer } from "./reducers/app-reducer";
export type ReduxStateType = ReturnType<typeof reducersBatch>


export type reduxStoreType = typeof store
export  type reduxDispatchType = typeof  dispatch;

let  reducersBatch = combineReducers({
    appReducer:appReducer,
});


export  const  store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducersBatch>

let dispatch = store.dispatch