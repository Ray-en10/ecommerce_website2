import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="nav-menu active">
          <li>
            <Link className="nva" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nva2"
              to="/Productsign"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Product
            </Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="#PROMOTION" className="menudrop">
                    Promotion
                  </Link>
                </li>
                <li>
                  <Link to="#Tvs" className="menudrop">
                    TVs
                  </Link>
                </li>
                <li>
                  <Link to="#pcs" className="menudrop">
                    PCs
                  </Link>
                </li>
                <li>
                  <Link to="#lap" className="menudrop">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link to="#acc" className="menudrop">
                    Accessories
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="nva" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="checkout">
          <div>
            <Link className="nva" to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
              My cart
            </Link>
          </div>
        </div>
      <div className="but1">
        <button className='button1'><Link className='but' to='/Sign'>Logout</Link></button>
          </div>
      </div>
    </div>
  );
}
export default Navbar;
