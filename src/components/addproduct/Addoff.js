import React, { useState } from "react";
import Navbar from "../Navbar";
import "../addproduct/Add.css";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

const AddoffUrl = "http://localhost/php-react/login-php/add/addoff.php";

function Addoff() {
  const [id, setId] = useState("");
  const [reference, setReference] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !reference || !name || !description || !imageurl || !amount || !price) {
      window.alert("All fields are required");
      return;
    }
    fetch(AddoffUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        reference,
        name,
        description,
        imageurl,
        amount,
        price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Product has been added");
        setTimeout(function () {
          window.location.reload();
        }, 2500);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer/>
      <form className="formProdadd" id="form2" onSubmit={handleSubmit}>
        <h2 className="form__title">ADD AN OFFRE</h2>
        <input
          type="number"
          placeholder="ID"
          className="input"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Reference"
          className="input"
          name="Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className="input"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="input"
          name="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="input"
          name="Imageurl"
          value={imageurl}
          onChange={(e) => setImageurl(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          className="input"
          name="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="input"
          name="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button className="btn3" type="submit">
          ADD
        </button>
      </form>
      <Link className="buttop" to="/Productaff">
        <button className="button-name">Back to the Product list</button>
      </Link>
    </div>
  );
}
export default Addoff;