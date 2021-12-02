import React, { useEffect, useState } from 'react';
import "./ExploredPd.css"
import { Link } from 'react-router-dom';
const ExploredPd = () => {
  const[products,setProducts]=useState([]);
  useEffect(()=>{
fetch('https://quiet-hamlet-36498.herokuapp.com/products')
.then(res=>res.json())
.then(data=>setProducts(data));


  },[])
    return (
        <div className="mt-3 bg ">
            <h2 className="pack-h1"><span style={{color:'yellow'}}> OUR ALL PRODUCTS</span></h2>
                    
<div class="row row-cols-1 row-cols-md-2 g-6">
  {products.map(pd=><div
  className="" key={pd.id}>
    
    <img className="img-fluid rounded" src={pd.img} alt="" />
    <h2 className="name-color">{pd.name}</h2>
    <h5>Price:${pd.Price}</h5>
    <p className="">Warrenty: <small>{pd.warrenty}</small> years</p>
    
     <Link to={`/order/${pd._id}`}>
     <button className="bg-success text-white rounded-pill p-1">Get Order</button>
    </Link>
    </div>)


  }
  
</div> 
        </div>
    );
};

export default ExploredPd;