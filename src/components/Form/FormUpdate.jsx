import React, {useEffect, useState} from 'react';
import firebase from "../../firebase";
import Alert from "../Alert/Alert";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import {hideLoader, showLoader} from "../../redux/action";




const FormUpdate = ({updateProduct, showAlert, alert, product, params }) => {

    const [value, setValue] = useState({img: null, title: '', descr: '', price: '', discPers: '', discDate:''})
    const {register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)


    useEffect(()=>{
        setValue(product)
    },[product])


    const onFileChange = async (e) => {
        dispatch(showLoader())
        let bucketName = 'images'
        const file = e.target.files[0];
        const fileRef = firebase.storage().ref(`${bucketName}/${file.name}`)
        await fileRef.put(file);
        setValue({...value, img: await fileRef.getDownloadURL()});
        dispatch(hideLoader())
    };

    const submitHandler = () => {
        const priceDisc = Math.ceil(value.price - (value.price * value.discPers) / 100 )

        if (value.title.trim() && value.price.trim()) {
            const newProduct = {
                ...value, priceDisc
            }
            updateProduct(newProduct, params)
            showAlert('Товар был успешно обновлен', 'success')
        } else {
            showAlert('Внимание! Поля "название" и "цена" товара не могут быть пустыми.')
        }
    }

    return (
        <form>
            {alert && <Alert text={alert.text} type={alert.type}/>}
            <div className="form-group">

                <input
                    {...register("name", {
                        minLength: {
                            value: 20,
                            message: 'Не менее 20 букв'
                        },
                        maxLength: {
                            value: 60,
                            message: 'Не более 60 букв'
                        }
                    })}
                    type="text"
                    required={true}
                    className="form-control m-3"
                    placeholder="Введите название товара"
                    value={value.title}
                    onChange={e => setValue({...value, title: e.target.value})}
                />
                <div className="m-3" style={{color:'red'}}>{errors.name && errors.name.message}</div>


                <input
                    {...register("descr", {
                        maxLength: {
                            value: 200,
                            message: 'Не более 200 букв'
                        }
                    })}
                    type="text"
                    className="form-control m-3"
                    placeholder="Введите описание товара"
                    value={value.descr}
                    onChange={e => setValue({...value, descr: e.target.value})}
                />
                <div className="m-3" style={{color:'red'}}>{errors.descr && errors.descr.message}</div>



                <input
                    {...register("price", {
                        min:{
                            value: 1,
                            message: 'Цена не может быть меннее 1$'
                        },
                        max:{
                            value: 99999999.99,
                            message: 'Цена не может быть более 99999999.99$'
                        }
                    })}
                    required={true}
                    type="number"
                    className="form-control m-3"
                    placeholder="Введите цену товара"
                    value={value.price}
                    onChange={e => setValue({...value, price: e.target.value})}
                />
                <div className="m-3" style={{color:'red'}}>{errors.price && errors.price.message}</div>


                <input
                    {...register("discPers", {
                        min:{
                            value: 10,
                            message: 'Процент скидки не может быть меннее 10%'
                        },
                        max:{
                            value: 90,
                            message: 'Процент скидки не может быть более 90%'
                        }
                    })}
                    type="number"
                    className="form-control m-3"
                    placeholder="Введите процент скидки товара"
                    value={value.discPers}
                    onChange={e => setValue({...value, discPers: e.target.value})}
                />
                <div className="m-3" style={{color:'red'}}>{errors.discPers && errors.discPers.message}</div>


                <input
                    type="date"
                    className="form-control m-3"
                    value={value.discDate}
                    onChange={e => setValue({...value, discDate: e.target.value})}
                />
                <input
                    className="form-control m-3"
                    type="file"
                    onChange={onFileChange}
                />
                <div className="m-3" style={{color:'red'}}>{errors.img && errors.img.message}</div>



            </div>
            {loading
                ? <Loader />
                :<button onClick={handleSubmit(submitHandler)}
                         className="btn btn-success text-center m-2"
                >Обновить товар</button>
            }

        </form>
    );
};

export default FormUpdate;