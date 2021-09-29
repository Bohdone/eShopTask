import React from 'react';
import {useHistory} from "react-router-dom";
import {getCurrentDate} from "../../utils/CurrentDate";

const Products = ({products, onRemove}) => {

    const router = useHistory()

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 productCardWrap">
                {products.map(product=>(
                    <div
                        className="col productCard"
                        key={product.id}
                    >
                        <div className="card">
                            <div>
                                <img
                                    src={product.img || 'https://content1.rozetka.com.ua/goods/images/big_tile/176286574.jpg'}
                                    className="card-img-top p-2"
                                    alt={product.title}
                                    height={'285px'}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">{product.title}</h5>
                                <p className="card-text text-center">{product.descr}</p>
                            </div>
                            {product.discDate >= getCurrentDate()
                                ? <strong style={{color:"red",fontSize:"30px"}}>Discount: {product.priceDisc}$</strong>
                                : <strong style={{color:"red",fontSize:"30px"}}>{product.price}$</strong>
                            }




                            <div className="crud-menu">
                                    <span style={{cursor: 'pointer'}} onClick={()=> router.push(`product/${product.id}`)} className="badge bg-info text-dark p-2 m-2">Update</span>
                                <span style={{cursor: 'pointer'}} onClick={()=>onRemove(product.id)} className="badge bg-danger p-2 m-2">Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
