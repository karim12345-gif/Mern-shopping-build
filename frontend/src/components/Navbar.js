import "./Navbar.css";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = ({ click }) => {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  // this is the cart item icon, where it will change based on the number of items 
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0); 
  }
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>Shopping cart</h2>
      </div>
     
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* Icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="shop__link">
            Shop
          </Link>
        </li>
      </ul>

      {/* Hmaburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
 
export default Navbar;
