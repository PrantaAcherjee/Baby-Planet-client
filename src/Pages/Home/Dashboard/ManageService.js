import React,{useState,useEffect} from 'react';

const ManageService = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
      fetch('https://quiet-hamlet-36498.herokuapp.com/products')
      .then(res=>res.json())
      .then(data=>setProducts(data));
  },[])
  const handleRemove=id=>{
      const url=`https://quiet-hamlet-36498.herokuapp.com/products/${id}`
      fetch(url,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          alert('Deleted One');
          const remaining=products.filter(product=>product._id!==id);
          setProducts(remaining);
      })
  }
    return (
        <div className='pt-4'>
          <h3>MANAGE SERVICES BY ADMIN</h3>
          {
               products.map(product=><div key={product._id}>

                   <div className="d-flex justify-content-center align-items-center m-3 p-3 ">
                   <div className="m-3">
                   <img className="img-fluid" src={product.img} alt="" />
                   </div>
                   <div>
                   <button className="text-white bg-danger m-5 p-3 rounded-pill" onClick={()=>handleRemove(product._id)}>Remove</button>
                   </div>
                   </div>
               </div>)
           }  
        </div>
    );
};

export default ManageService;