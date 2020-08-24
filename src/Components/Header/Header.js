import React from 'react';
import logo from '../../images/Amazon_logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header text-center'>
            <div className="container">
                <div className="col-md-12">
                    <img src={logo} alt="Logo" className='img-fluid' />
                </div>
            </div>
            <div className="menu-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Order Review</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;