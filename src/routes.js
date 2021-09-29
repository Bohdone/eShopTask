import {ADD_PRODUCT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, UPDATE_PRODUCT_ROUTE} from "./utils/consts";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: MAIN_ROUTE,
        Component: ProductsList
    },
    {
        path: ADD_PRODUCT_ROUTE,
        Component: AddProduct
    },
    {
        path: UPDATE_PRODUCT_ROUTE,
        Component: UpdateProduct
    }
]