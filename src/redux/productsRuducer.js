import {ADD_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCTS_BY_ID, REMOVE_PRODUCT} from "./types";

const initialState = {
    products: [],
    fetchedProductById:[],
}


export const productsRuducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case FETCH_PRODUCTS:
            return {...state, products: action.payload}
        case FETCH_PRODUCTS_BY_ID:
            return {...state, fetchedProductById: action.payload}
        case REMOVE_PRODUCT:
            return {...state,  products: state.products.filter(product =>
                    product.id !== action.payload)}

        default : return state
    }
}