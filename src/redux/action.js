import {
    ADD_PRODUCT,
    FETCH_PRODUCTS,
    SHOW_ALERT,
    REMOVE_PRODUCT,
    HIDE_ALERTS,
    SHOW_LOADER,
    HIDE_LOADER,
    FETCH_PRODUCTS_BY_ID
} from "./types";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL


export function showAlert(text, type) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })


        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERTS,
        alert: null
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function addProduct(newProduct) {
    return async dispatch => {
        const response = await axios.post(`${url}/products.json`, newProduct)
        const payload = {
            ...newProduct,
            id: response.data.name
        }
        dispatch({type:ADD_PRODUCT, payload})
    }
}

export function updateProduct(newProduct, id) {
    return async dispatch => {
        const response = await axios.put(`${url}/products/${id}.json`,newProduct)
        const payload = response.data
        dispatch({type:ADD_PRODUCT, payload})
    }
}


export function fetchProducts() {
    return async dispatch => {
        dispatch(showLoader())
        const response = await axios.get( `${url}/products.json`)
        const payload = Object.keys(response.data || {}).map(key => {
            return {
                ...response.data[key],
                id: key
            }
        })
        dispatch({type: FETCH_PRODUCTS, payload})
        dispatch(hideLoader())

    }
}


export function fetchProductById(id) {
    return async dispatch => {
        dispatch(showLoader())
        const response = await axios.get(`${url}/products/${id}.json`)
        const payload = response.data
        dispatch({type: FETCH_PRODUCTS_BY_ID, payload})
        dispatch(hideLoader())
    }
}

export function removeProduct(id) {
    return async dispatch => {
        await axios.delete(`${url}/products/${id}.json`)
        dispatch({type: REMOVE_PRODUCT, payload: id})
    }
}

