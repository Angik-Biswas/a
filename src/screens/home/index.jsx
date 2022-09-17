import React from "react";
import Header from "../../component/header";
import {  useSelector}  from "react-redux";
import { Link } from "react-router-dom";
import './styles.css'

function Home() {
 const { products } =   useSelector((state) => state.ProductsReducer);

  return (
    <div>
      <Header />
      <div className="container mtb-30">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product">
                <div className="product_image">
                  <Link to={`/details/${product.id}`}>
                    <img
                      src={product.image}
                      alt=" produc-image"
                      className="img"
                    />
                  </Link>
                </div>
                <div className="name">{product.name}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product_price">
                      <span className="actual_price"> {product.price} </span>{" "}
                      <span className="s2">{product.discount}%</span>
                    </div>
                  </div>
                 <div className="col-6">
                    <div className="product_discount_price">
                      <span className="dp">{product.discountPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      )

  }
  export default Home;