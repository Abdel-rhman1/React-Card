import React, { useState, useEffect, useRef,useContext } from 'react';
import ProductDetails from './ProductDetails';
import Category from './Category';

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let initialProducts = useRef(false)
    useEffect(() => {
        if (!initialProducts.current) {
            initialProducts.current = true;
            fetchProducts();
            
            setLoading(false);
        } 
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    return (
        <>

            <div className='container my-5'>
                
           
                <div className='row'>
                    {products.map((product) => {
                        return <ProductDetails key={product.id} product={product} />
                    })
                    }
                </div>
            </div>


        </>
    );
}

export default Products;