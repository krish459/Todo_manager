import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux' 

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { addItemReducer, getAllItemsReducer,editItemReducer } from './reducers/itemReducer'

const finalReducer = combineReducers({
    getAllItemsReducer : getAllItemsReducer,
    addItemReducer : addItemReducer,
    editItemReducer : editItemReducer
})

const initialState = {
  

}

const composeEnhancers= composeWithDevTools({})
const store = createStore(finalReducer , initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
