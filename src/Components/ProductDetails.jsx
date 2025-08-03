
import './../styles/products.css';
import  { useState, useEffect, useRef, useContext } from 'react';
 
import { CartContext } from '../context/Cart'
function ProductDetails({ product }) {

    const { cartItems, addToCart } = useContext(CartContext)


    return (
        <>
            <div className="col-4 mt-2">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title.split(" ").slice(1, 4)} ...</h5>
                        <p className="card-text">{product.description.split(" ").slice(1, 15)} ....</p>
                        <button href="#" className="btn btn-primary" onClick={()=>{addToCart(product)}}>Add To Card</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ProductDetails;