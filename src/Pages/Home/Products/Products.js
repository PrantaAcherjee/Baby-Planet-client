import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = () => {
  const[products,setProducts]=useState([]);
  useEffect(()=>{
fetch('https://quiet-hamlet-36498.herokuapp.com/products')
.then(res=>res.json())
.then(data=>setProducts(data.slice(0,6)));


  },[])
    return (
        <div className="mt-3">
            <h2 className="pack-h1">Our <span style={{color:'green'}}>Top Products</span></h2>
            <p >Best baby walker in your touch which we we provide because we care your baby.</p>
             
            
<div class="row row-cols-1 row-cols-md-3 g-6">
  {products.map(pd=><div
  className=""key={pd._id}>
    
    <img className="img-fluid" src={pd.img} alt="" />
    <h2 className="name-color">{pd.name}</h2>
    <h5>Price:${pd.Price}</h5>
    <p className="">Warrenty :<small>{pd.warrenty}</small> years</p>
    
     <Link to={`/order/${pd._id}`}>
     <button className="bg-success text-white rounded-pill p-1">Get Order</button>
     </Link>
    </div>)


  }
  
</div> 
        </div>
    );
};

export default Products;