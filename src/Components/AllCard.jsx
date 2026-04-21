import React from 'react'
import "./AllCard.css"
import CardProducts from './CardProducts';


const AllCard = (props) => {
    console.log("All product goes here ", props.allProducts);


  return (
    <>
    <div className='main_Container'>
        {props.allProducts?.map((product) => ( 
             <CardProducts key={product.id} product ={product} />
        ))}
      
    </div>
    </>
  )
}

export default AllCard
