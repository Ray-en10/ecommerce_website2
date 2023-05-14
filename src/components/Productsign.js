import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import Navbarcli from "./Navbarcli";
import "./Product.css";

function Productsing() {
  const [productoff, setPoductsoff] = useState([]);
  const [productstv, setProductstv] = useState([]);
  const [productspcs, setProductspcs] = useState([]);
  const [productslap, setProductslap] = useState([]);
  const [productsacc, setProductsacc] = useState([]);
    const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace('#', '');
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodoff.php")
      .then((res) => res.json())
      .then((data) => setPoductsoff(data))
      .catch((error) => console.error(error));
  }, []);

  
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodtv.php")
      .then((res) => res.json())
      .then((data) => setProductstv(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodpcs.php")
      .then((res) => res.json())
      .then((data) => setProductspcs(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodlap.php")
      .then((res) => res.json())
      .then((data) => setProductslap(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodacc.php")
      .then((res) => res.json())
      .then((data) => setProductsacc(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div>
      <Navbarcli />
      <div className="prodpage">
        <section>
          <div id="PROMOTION">
            <h1 className="app_prod3">TODAY'S PROMOTION</h1>
            <div class="list">
              {productoff.map((product, index) => {
                if (index < 10) {
                  return (
                    <div className="product">
                      <img alt={product.Name} src={product.Imageurl} />
                      <div>
                        <h2>{product.Name}</h2>
                        <h4 class="price">
                          {product.Price}
                          <sup>.00</sup>
                        </h4>
                        <h4 className="seetext">
                          <Link className="seemore">
                            See More
                          </Link>
                        </h4>
                        <br />
                        <Link to="#">
                          <p>Add to cart</p>
                        </Link>
                      </div>
                      <h5>{product.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
        <section>
          <div id="Tvs">
            <h1 className="app_prod4">our Tv's</h1>
            <div class="list">
              {productstv.map((product, index) => {
                if (index < 10) {
                  return (
                    <div class="product">
                      <img alt={product.Name} src={product.Imageurl} />
                      <div>
                        <h2>{product.Name}</h2>
                        <h5 class="price">
                          {product.Price}
                          <sup>.00</sup>
                        </h5>
                        <h4 className="seetext">
                          <Link className="seemore">
                            See More
                          </Link>
                        </h4>
                        <br />
                        <Link to="#">
                          <p>Add to cart</p>
                        </Link>
                      </div>
                      <h5>{product.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
        <section>
          <div id="pcs">
            <h1 className="app_prod4">our Pc's</h1>
            <div class="list">
              {productspcs.map((product, index) => {
                if (index < 10) {
                  return (
                    <div class="product">
                      <img alt={product.Name} src={product.Imageurl} />
                      <div>
                        <h2>{product.Name}</h2>
                        <h5 class="price">
                          {product.Price}
                          <sup>.00</sup>
                        </h5>
                        <h4 className="seetext">
                          <Link className="seemore">
                            See More
                          </Link>
                        </h4>
                        <br />
                        <Link to="#">
                          <p>Add to cart</p>
                        </Link>
                      </div>
                      <h5>{product.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
        <section>
          <div id="lap">
            <h1 className="app_prod5">our Laptops</h1>
            <div class="list">
              {productslap.map((product, index) => {
                if (index < 10) {
                  return (
                    <div class="product">
                      <img alt={product.Name} src={product.Imageurl} />
                      <div>
                        <h2>{product.Name}</h2>
                        <h5 class="price">
                          {product.Price}
                          <sup>.00</sup>
                        </h5>
                        <h4 className="seetext">
                          <Link className="seemore">
                            See More
                          </Link>
                        </h4>
                        <br />
                        <Link to="#">
                          <p>Add to cart</p>
                        </Link>
                      </div>
                      <h5>{product.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
        <section>
          <div id="acc">
            <h1 className="app_prod5">Accessories</h1>
            <div class="list">
              {productsacc.map((product, index) => {
                if (index < 10) {
                  return (
                    <div class="product">
                      <img alt={product.Name} src={product.Imageurl} />
                      <div>
                        <h2>{product.Name}</h2>
                        <h5 class="price">
                          {product.Price}
                          <sup>.00</sup>
                        </h5>
                        <h4 className="seetext">
                          <Link className="seemore">
                            See More
                          </Link>
                        </h4>
                        <br />
                        <Link to="#">
                          <p>Add to cart</p>
                        </Link>
                      </div>
                      <h5>{product.Name}</h5>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default Productsing;
