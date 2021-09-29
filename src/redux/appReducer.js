import {HIDE_ALERTS, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";
import {auth} from "../firebase";


const initialState = {
    loading: false,
    alert: null,
    auth
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERTS:
            return {...state, alert: null}
        default: return state
    }
}