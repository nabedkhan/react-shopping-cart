import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((prevAmount, currAmount) => prevAmount + currAmount.price, 0);

    let vat = 0;
    if (total < 100) {
        vat = total * 0.01;
    } else if (total > 100 && total < 500) {
        vat = total * 0.02;
    } else {
        vat = total * 0.03;
    }

    let shipping = 0;
    if (total < 500) {
        shipping = total * 0.01;
    } else {
        shipping = total * 0.02;
    }

    return (
        <div className='cart text-white p-4'>
            <h3 className='text-center'>Order Summery <FontAwesomeIcon icon={faShoppingCart} /> <span className='text-warning'>({cart.length})</span></h3>
            <hr />
            <table>
                <tr>
                    <td><h5>Items: </h5></td>
                    <td><h5 className='ml-5 text-warning'>${total.toFixed(2)}</h5></td>
                </tr>

                <tr>
                    <td><h5>Include VAT: </h5></td>
                    <td><h5 className='ml-5 text-warning'>${vat.toFixed(2)}</h5></td>
                </tr>

                <tr>
                    <td><h5>Shipping Charge: </h5></td>
                    <td><h5 className='ml-5 text-warning'>${shipping.toFixed(2)}</h5></td>
                </tr>
                <hr />

                <tr>
                    <td><h5 className='text-warning'>Total Amount: </h5></td>
                    <td><h5 className='ml-5 text-warning'>${(total + vat + shipping).toFixed(2)}</h5></td>
                </tr>
            </table>
            <button className='btn btn-warning w-lg-50 mt-3 text-white'>Review Your Order</button>
        </div>
    );
};

export default Cart;