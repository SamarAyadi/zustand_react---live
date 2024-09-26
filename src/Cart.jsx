import './Cart.css';
import { useCartStore } from './store/cart-store';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  return (
    <div className="cart-container">
      <h3 className="cart-title">Your Shopping Cart</h3>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <span className="cart-item-name">{product.name}</span>
              <button
                className="remove-button"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-actions">
            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
