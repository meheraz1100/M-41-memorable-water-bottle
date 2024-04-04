import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleremoveToCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                <h3>Added Products in cart</h3>
                {cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img><br />
                    <button onClick={() => handleremoveToCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleremoveToCart: PropTypes.func.isRequired
}

export default Cart;