import React, {useEffect} from 'react';
import Products from "../components/Products/Products";
import {connect, useSelector} from "react-redux";
import {fetchProducts, removeProduct} from "../redux/action";
import Loader from "../components/Loader/Loader";


const ProductsList = ({products,  removeProduct, fetchProducts}) => {

    const loading = useSelector(state => state.app.loading)



    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div className='p-2'>
                 <Products products={products} onRemove={removeProduct}/>
        </div>
    );
};


const mapStateToProps = state =>({
    products : state.products.products
})

const mapDispatchToProps = {
    fetchProducts,
    removeProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);