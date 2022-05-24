import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 

const Products = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
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
           <Link to={`/order/${pd._id}`}>
           <img className='img-fluid image' src={pd.img}/>
           </Link>          
         </div>)
       }
     </Slider>
     </>
    );
};

export default Products;