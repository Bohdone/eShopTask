import React from 'react';
import Form from "../components/Form/Form";
import {addProduct, showAlert} from "../redux/action";
import {connect} from "react-redux";


const AddProduct = ({addProduct, showAlert, alert}) => {

    return (
        <div>
            <h1 className={'text-center'}>Страница добавления товаров</h1>
            <Form addProduct={addProduct} alert={alert} showAlert={showAlert} />
        </div>
    );
};

const mapStateToProps = state => ({
    alert : state.app.alert
})

const mapDispatchToProps = {
    addProduct,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);