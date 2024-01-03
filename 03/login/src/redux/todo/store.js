import {createStore} from 'redux'
import { todoReducer } from './reducers';
//add reducer
const store=createStore(todoReducer)
export default store;