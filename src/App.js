import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./routes/Home";
import Sign from "./components/Sign";
import Adminpage from "./components/Adminpage";
import Product from "./components/Product";
import Productsign from "./components/Productsign";
import Formaff from "./components/Formaff";
import Acccli from "./components/Acccli";
import Productaff from "./components/Productaff";
import AddTv from './components/addproduct/AddTv';
import Addoff from "./components/addproduct/Addoff";
import Addpc from "./components/addproduct/Addpc";
import Addlap from "./components/addproduct/Addlap";
import Addacc from "./components/addproduct/Addacc";
import Contact from "./components/Contact";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/Sign" element={<Sign/>} />
      <Route exact path="/Adminpage" element={<Adminpage/>}/>
      <Route exact path="/Product" element={<Product/>}/>
      <Route exact path="/Productsign" element={<Productsign/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Formaff" element={<Formaff/>}/>
      <Route exact path="/Acccli" element={<Acccli/>}/>
      <Route exact path="/Productaff" element={<Productaff/>}/>
      <Route exact path="/addproduct/Addoff" element={<Addoff />} />
      <Route exact path="/addproduct/AddTv" element={<AddTv />} />
      <Route exact path="/addproduct/Addpc" element={<Addpc />} />
      <Route exact path="/addproduct/Addlap" element={<Addlap />} />
      <Route exact path="/addproduct/Addacc" element={<Addacc />} />
    </Routes>
  );
}
export default App;