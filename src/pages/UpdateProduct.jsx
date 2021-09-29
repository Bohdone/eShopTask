import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchProductById, showAlert, updateProduct} from "../redux/action";
import {useParams} from "react-router-dom";
import FormUpdate from "../components/Form/FormUpdate";


const UpdateProduct = ({product, fetchProductById, alert, showAlert, updateProduct}) => {

    const params = useParams()


    useEffect(()=>{
        fetchProductById(params.id)
    }, [])


    return (
        <div>
            <h1 className={'text-center'}>Страница редактирования товара</h1>
            <FormUpdate
                product={product}
                alert={alert}
                showAlert={showAlert}
                updateProduct={updateProduct}
                params={params.id}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    product : state.products.fetchedProductById,
    alert : state.app.alert
})

const mapDispatchToProps = {
    fetchProductById,
    showAlert,
    updateProduct
}

 export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
