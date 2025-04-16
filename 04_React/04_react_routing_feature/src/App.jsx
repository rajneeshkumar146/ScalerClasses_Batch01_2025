import "./App.css";
import { Navigate, Routes, Route } from 'react-router-dom'

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>

        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/house" element={<Navigate to="/" />}></Route>
        <Route path="/ghar" element={<Navigate to="/" />}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

    </>
  )
}

export default App
