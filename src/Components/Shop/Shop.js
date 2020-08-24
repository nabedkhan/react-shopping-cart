import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTenProducts = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTenProducts);

    const [cart, setCart] = useState([]);

    const clickEventHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        {
                            products.map(product => <Product product={product} click={clickEventHandler}></Product>)
                        }
                    </div>
                    <div className="col-lg-3 col-md-12 bg-dark">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;