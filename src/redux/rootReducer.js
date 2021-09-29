import {combineReducers} from "redux";
import {productsRuducer} from "./productsRuducer";
import {AppReducer} from "./appReducer";

export const rootReducer = combineReducers({
    products : productsRuducer,
    app : AppReducer
})