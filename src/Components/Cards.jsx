import { useState, useEffect, useContext, use } from 'react';
import { CartContext } from '../context/Cart';
function Cards() {

    // const [cards, setCards] = useState([]);
    const { cartItems, addToCart, getCartTotal, clearCart , removeFromCart } = useContext(CartContext);

    const handleChange = (e, oldValue) => {
        const newValue = parseInt(e.target.value, 10);
        if (newValue > oldValue.quantity) {
            addToCart(oldValue); // Up arrow (increase)
        } else if (newValue < oldValue.quantity) {
            removeFromCart(oldValue); // Down arrow (decrease)
        }
    }
    return (
        <div className="container mt-5">
            <button className="btn btn-danger mb-3 text-left" onClick={() => clearCart()}>Clear Cart</button>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                {cartItems.length === 0 && 
                    
                        <tr ><td colspan="5">Your cart is empty!</td></tr>
                        }
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleChange(e, item)}
                                    style={{ width: 60 }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td colSpan="3">${getCartTotal().toFixed(2)}</td>
                    </tr>
                </tfoot>

            </table>

            

        </div>
    );
}

export default Cards;