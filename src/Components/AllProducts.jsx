import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AllCard from './AllCard';


const AllProducts = () => {
  // const [allProd, setAllProd] = useState(true);
  //  const all = () => {
  //   setAllProd(true)
  // }

  const [isLoading , setIsLoading] =useState(true)
  const [allProducts, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    // const url =  "https://api.escuelajs.co/api/v1/products";
    const url = "https://api.escuelajs.co/api/v1/products"
    try {
      const res = await axios.get(url);
      setAllProduct(res?.data);
      setIsLoading(false)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  
  return (
    <div>
      <section>
        {/* <button onClick={all}>All</button> */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <AllCard allProducts={allProducts} /> 
        )}
      </section>
    </div>
  ) 
};

export default AllProducts
