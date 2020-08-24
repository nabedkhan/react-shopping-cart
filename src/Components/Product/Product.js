import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, seller, key, price, stock, features } = props.product;
    return (
        <div className='product' id={key}>
            <img src={img} className='img-fluid' alt="Product-Image" />

            <div className="product-content ml-5">
                <h3>{name}</h3>

                <div className="content-wrapper d-flex">
                    <div className="left-content">
                        <p>by: {seller}</p>
                        <h4 className='text-warning font-weight-bold'>${price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.click(props.product)} className='btn btn-warning px-md-5 border-dark'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div className="right-content">
                        <p className='font-weight-bold mb-0'>Feature</p>
                        {
                            features.map(element => <li>{element.description}: {element.value}</li>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;