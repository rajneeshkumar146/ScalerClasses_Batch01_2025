import "./App.css";
import { Navigate, Routes, Route } from 'react-router-dom'

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import User from "./components/User";
import Cart from "./components/Cart";
import PaginationProvider from "./components/contexts/PaginationContext";

function App() {
  return (
    <PaginationProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product" element={<Product></Product>}></Route>

        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/house" element={<Navigate to="/" />}></Route>
        <Route path="/ghar" element={<Navigate to="/" />}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

    </PaginationProvider>
  )
}

export default App
