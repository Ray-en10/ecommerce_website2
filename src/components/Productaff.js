import React, { useState, useEffect } from "react";
import "./Productaff.css";
import Navbarafter from "./Navbarafter";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


function Productaff() {
  const [productoff, setProductsoff] = useState([]);
  const [productstv, setProductstv] = useState([]);
  const [productspc, setProductspc] = useState([]);
  const [productslap, setProductslap] = useState([]);
  const [productsacc, setProductsacc] = useState([]);
  const { hash } = useLocation();

  //scrolll
  useEffect(() => {
    const id = hash.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  //table show more option 
  function MyTable() {
    const [showFullText, setShowFullText] = useState(false);
    const maxTextLength = 50; // maximum length of the truncated text
  
    function handleTextClick() {
      setShowFullText(true);
    }
  
    function renderTableCell(text) {
      if (text.length > maxTextLength) {
        if (showFullText) {
          return <td>{text}</td>;
        } else {
          return (
            <td className="truncated-text" onClick={handleTextClick}>
              {text.slice(0, maxTextLength)}... (click to see more)
            </td>
          );
        }
      } else {
        return <td>{text}</td>;
      }
    }
  }
  //promotion
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodoff.php")
      .then((res) => res.json())
      .then((data) => setProductsoff(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("id to be deleted:", id);
      fetch("http://localhost/php-react/login-php/delete/deleteoff.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          console.log("Response from server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data from server:", data);
          if (data.message === "Record deleted successfully") {
            toast.success("Product has been deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setProductsoff(productoff.filter((product) => product.id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };
  //tvs
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodtv.php")
      .then((res) => res.json())
      .then((data) => setProductstv(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete2 = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("id to be deleted:", id);
      fetch("http://localhost/php-react/login-php/delete/deletetv.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          console.log("Response from server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data from server:", data);
          if (data.message === "Record deleted successfully") {
            toast.success("Product has been deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setProductstv(productstv.filter((product) => product.id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };
  //pc
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodpcs.php")
      .then((res) => res.json())
      .then((data) => setProductspc(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete3 = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("id to be deleted:", id);
      fetch("http://localhost/php-react/login-php/delete/deletepc.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          console.log("Response from server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data from server:", data);
          if (data.message === "Record deleted successfully") {
            toast.success("Product has been deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setProductspc(productspc.filter((product) => product.id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };
  //laptops
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodlap.php")
      .then((res) => res.json())
      .then((data) => setProductslap(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete4 = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("id to be deleted:", id);
      fetch("http://localhost/php-react/login-php/delete/deletelap.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          console.log("Response from server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data from server:", data);
          if (data.message === "Record deleted successfully") {
            toast.success("Product has been deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setProductslap(productslap.filter((product) => product.id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };
  //acc
  useEffect(() => {
    fetch("http://localhost/php-react/login-php/aff/affprodacc.php")
      .then((res) => res.json())
      .then((data) => setProductsacc(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete5 = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("id to be deleted:", id);
      fetch("http://localhost/php-react/login-php/delete/deleteacc.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => {
          console.log("Response from server:", res);
          return res.json();
        })
        .then((data) => {
          console.log("Data from server:", data);
          if (data.message === "Record deleted successfully") {
            toast.success("Product has been deleted", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setProductsacc(productsacc.filter((product) => product.id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Navbarafter />
      <div className="pageprod">
        <h2 className="title4">All Prodcuts</h2> <br />
        <ToastContainer />
        <div className="tab2" id="PROMOTION">
          <h2 className="tabtitle2">PROMOTION</h2> <br />
          <table className="table2">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Name</th>
                <th>Description</th>
                <th>Imageurl</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productoff.map((products) => (
                <tr key={products.id}>
                  <td>{products.Reference}</td>
                  <td>{products.Name}</td>
                  <td>{products.Description}</td>
                  <td>{products.Imageurl}</td>
                  <td>{products.Amount}</td>
                  <td>{products.Price}</td>
                  <td>
                    <Link 
                    className="lin3">
                      <FontAwesomeIcon className="iconcol" icon={faEdit} />
                    </Link>
                    <Link
                      className="lin4"
                      onClick={() => handleDelete(products.id)}
                    >
                      <FontAwesomeIcon className="iconcol2" icon={faTrash} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>

            <Link className="lin2" to="/addproduct/Addoff">
              <button className="btn3">ADD</button>
            </Link>
          </table>
        </div>
        <div className="tab2" id="Tvs">
          <h2 className="tabtitle2">Tv's</h2> <br />
          <table className="table2">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Name</th>
                <th>Description</th>
                <th>Imageurl</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productstv.map((products) => (
                <tr key={products.id}>
                  <td>{products.Reference}</td>
                  <td>{products.Name}</td>
                  <td>{products.Description}</td>
                  <td>{products.Imageurl}</td>
                  <td>{products.Amount}</td>
                  <td>{products.Price}</td>
                  <td>
                    <Link
                      className="lin2"
                      onClick={() => handleDelete2(products.id)}
                    >
                      <button className="btn3">Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <Link className="lin2" to="/addproduct/Addtv">
              <button className="btn3">ADD</button>
            </Link>
          </table>
        </div>
        <div className="tab2" id="pcs">
          <h2 className="tabtitle2">Pc's</h2> <br />
          <table className="table2">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Name</th>
                <th>Description</th>
                <th>Imageurl</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productspc.map((products) => (
                <tr key={products.id}>
                  <td>{products.Reference}</td>
                  <td>{products.Name}</td>
                  <td>{products.Description}</td>
                  <td>{products.Imageurl}</td>
                  <td>{products.Amount}</td>
                  <td>{products.Price}</td>
                  <td>
                    <Link
                      className="lin2"
                      onClick={() => handleDelete3(products.id)}
                    >
                      <button className="btn3">Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <Link className="lin2" to="/addproduct/Addpc">
              <button className="btn3">ADD</button>
            </Link>
          </table>
        </div>
        <div className="tab2" id="lap">
          <h2 className="tabtitle2">Laptops</h2> <br />
          <table className="table2">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Name</th>
                <th>Description</th>
                <th>Imageurl</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productslap.map((products) => (
                <tr key={products.id}>
                  <td>{products.Reference}</td>
                  <td>{products.Name}</td>
                  <td>{products.Description}</td>
                  <td>{products.Imageurl}</td>
                  <td>{products.Amount}</td>
                  <td>{products.Price}</td>
                  <td>
                    <Link
                      className="lin2"
                      onClick={() => handleDelete4(products.id)}
                    >
                      <button className="btn3">Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <Link className="lin2" to="/addproduct/Addlap">
              <button className="btn3">ADD</button>
            </Link>
          </table>
        </div>
        <div className="tab2" id="acc">
          <h2 className="tabtitle2">Accessories</h2> <br />
          <table className="table2">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Name</th>
                <th>Description</th>
                <th>Imageurl</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsacc.map((products) => (
                <tr key={products.id}>
                  <td>{products.Reference}</td>
                  <td>{products.Name}</td>
                  <td>{products.Description}</td>
                  <td>{products.Imageurl}</td>
                  <td>{products.Amount}</td>
                  <td>{products.Price}</td>
                  <td>
                    <Link
                      className="lin2"
                      onClick={() => handleDelete5(products.id)}
                    >
                      <button className="btn3">Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <Link className="lin2" to="/addproduct/Addacc">
              <button className="btn3">ADD</button>
            </Link>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Productaff;
