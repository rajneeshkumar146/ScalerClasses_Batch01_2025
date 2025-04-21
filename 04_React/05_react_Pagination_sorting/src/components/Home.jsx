import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import basicOps from './utility/basicOps';


import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Categories from './Categories';

function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  const [currCategories, setCurrCategories] = useState("All Categories");


  /********************Getting all the Products *****************/
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      setProducts(productData);
    })();
  }, []);

  /********************Getting all the categories *****************/
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const categorieData = await response.json();

      setCategories(categorieData);
    })();
  }, []);

  const modifiedArrayOfProducts = basicOps(products, searchTerm);

  return (
    <>
      <header className='nav_wrapper'>
        <div className='search_sortWrapper'>
          <input className='search_input' type="text" value={searchTerm} onChange={(event) => {
            setSearchTerm(event.target.value);
          }}></input>

          <div className='icon_container'>
            <ArrowCircleUpIcon style={{ color: "white" }} fontSize="large" onClick={() => {

            }} />
          </div>

          <div className='icon_container'>
            <ArrowCircleDownIcon style={{ color: "white" }} fontSize="large" onClick={() => {

            }} />
          </div>
        </div>

        <div className='categories_wrapper'>
          <Categories
            categories={categories}
            setCurrCategories={setCurrCategories}
          >
          </Categories>
        </div>


      </header>

      <main className='product_wrapper'>
        {
          modifiedArrayOfProducts === null ? <h3>....Loading</h3> :
            <>
              {
                modifiedArrayOfProducts.map((product) => {
                  return (
                    <div className='product'>
                      <img src={product.image} alt="" className='product_image'></img>
                      <div className='product_meta'>
                        <p className='product_title'>Title: {product.title}</p>
                        <p className='price'>Price: {product.price}</p>
                      </div>
                    </div>
                  );
                })
              }
            </>
        }
      </main>

    </>
  )
}

export default Home