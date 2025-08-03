import React, { useContext, useEffect } from 'react';

import {CartContext} from '../context/Cart';
import { Link } from 'react-router-dom';
function Navbar() {
    
    const { cartItems } = useContext(CartContext)
    console.log(cartItems, "cartItems in Navbar");
    useEffect(() => {
        //  const consxx = useContext(CartContext)
        // console.log(consxx)

    }, []);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Products</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="cards" className="nav-link active" aria-current="page" href="#">Card - {cartItems.length}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;