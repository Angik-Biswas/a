import React from "react";
import Logo from "../../assets/images/logo1.jpg";
import Cart from "../../assets/images/cart2.png";
import { useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";


const Nav = () => {
  
  const {totalQuantities} = useSelector(state => state.CartReducer)
  return (
    <div className="Nav">
      <div className="container">
        <div className="Nav-container">
          <div className="container-left">
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="container-middle">
            <Link to="/menu" className="l">
              <p className="p">Menu</p>
            </Link>
           
          </div>
          <div className="searchbox">
            <input className="inputbox"></input>
          </div>
          <div className="sign">
            <p>sign in</p>
          </div>
          <div className="container-right">
          <Link to="/cart">
              <div className="Busket">
                <img src={Cart} alt="logo" className="cart" />
                <span className="s1">{totalQuantities}</span>
              </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;