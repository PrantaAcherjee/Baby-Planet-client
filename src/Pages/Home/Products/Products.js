import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Slider from "react-slick";
 
const Products = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
     
    responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 3,
             
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
  };

  const[products,setProducts]=useState([]);
  useEffect(()=>{
fetch('https://quiet-hamlet-36498.herokuapp.com/products')
.then(res=>res.json())
.then(data=>setProducts(data.slice(0,6)));


  },[])
    return (
      <>
      <h2 className='h2'>Featured Products</h2>
      <Slider {...settings}>
       {
         products.map(pd=><div>
            <img className='img-fluid image' src={pd.img} alt=""/>
            <Link to={`/order/${pd._id}`}>
            <button style={{width:'94%'}} className="bg-info text-white btn mt-2"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
           </Link>          
         </div>)
       }
     </Slider>
     </>
    );
};

export default Products;