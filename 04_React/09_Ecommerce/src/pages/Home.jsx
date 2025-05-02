import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import basicOps from '../utility/basicOps';
import Categories from '../components/Categories';


import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { usePaginationContext } from '../contexts/PaginationContext';
import ProductList from '../components/ProductList';

const ASCENDING_ORDER_SORTING = 1;
const DESCENDING_ORDER_SORTING = -1;

function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  const [currCategories, setCurrCategories] = useState("All Categories");
  const [sortDirection, setSortDirection] = useState(0);  // 0: normal order, 1: ascending order, -1: descending order.

  const { pageNum, pageSize, setPageNum, setPageSize } = usePaginationContext();

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

  const object = basicOps(products, searchTerm, sortDirection, currCategories, pageNum, pageSize);
  let modifiedArrayOfProducts = object.modifiedArray != null ? object.modifiedArray : [];
  let totalPages = object.totalPages != null ? object.totalPages : 1;

  return (
    <>
      <header className='nav_wrapper'>
        <div className='search_sortWrapper'>
          <input className='search_input' type="text" value={searchTerm} onChange={(event) => {
            setSearchTerm(event.target.value);
          }}></input>

          <div className='icon_container'>
            <ArrowCircleUpIcon style={{ color: "white" }} fontSize="large" onClick={() => {
              setSortDirection(ASCENDING_ORDER_SORTING);
            }} />
          </div>

          <div className='icon_container'>
            <ArrowCircleDownIcon style={{ color: "white" }} fontSize="large" onClick={() => {
              setSortDirection(DESCENDING_ORDER_SORTING);
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
        <ProductList productList={modifiedArrayOfProducts}></ProductList>
      </main>

      <div className='pagination'>
        <button onClick={() => {
          if (pageNum === 1) {
            return;
          }
          setPageNum((pageNum) => pageNum - 1);
        }}
          disabled={pageNum <= 1 ? true : false}
        >
          <KeyboardArrowLeftIcon fontSize='large'></KeyboardArrowLeftIcon>
        </button>

        <div className='pageNum'>{pageNum}</div>

        <button onClick={() => {
          if (pageNum === totalPages) {
            return;
          }
          setPageNum((pageNum) => pageNum + 1);
        }}
          disabled={pageNum >= totalPages ? true : false}
        >
          <KeyboardArrowRightIcon fontSize='large'></KeyboardArrowRightIcon>
        </button>
      </div>

    </>
  )
}

export default Home