import {legacy_createStore , compose} from 'redux'
import { Appreducer } from "./reducer";
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store=legacy_createStore(Appreducer,composeEnhancers())