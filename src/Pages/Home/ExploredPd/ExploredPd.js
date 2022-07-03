import React, { useEffect, useState } from 'react';
import "./ExploredPd.css"
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import { DropdownButton,Dropdown,ButtonGroup } from 'react-bootstrap';

const ExploredPd = () => {
const[products,setProducts]=useState([]);
const [currentPage,setCurrentPage]=useState(1);
const [postPerPage]=useState(5);

useEffect(()=>{
fetch('https://quiet-hamlet-36498.herokuapp.com/products')
.then(res=>res.json())
.then(data=>setProducts(data));
},[])

// get current post 
const indexOfLastPost=currentPage*postPerPage;
const indexOfFirstPost=indexOfLastPost-postPerPage;
const currentPosts=products.slice(indexOfFirstPost,indexOfLastPost);

// pagination 
const pageNumbers=[];
for (let i=1; i<=Math.ceil(products.length/postPerPage);i++){
  pageNumbers.push(i);
}
const paginate=(pageNumber)=>setCurrentPage(pageNumber);

    return (
        <div style={{overflow:'hidden',marginTop:'4rem'}}>
          {
                products?.length<=0?<h6 style={{height:'100vh',marginTop:'1rem'}}>Loading.....</h6>:
                <div className='row'>
                <div className='col-md-3 mt-4'>
   
                  <input type="text" style={{outline:'none',width:'90%'}} placeholder='Search Products...'/>
                   
                  <h4 className='pt-3'>Category of products</h4>
                  <hr style={{color:'coral',height:'4px'}}/>
                  <p>Soft Toys</p>
                  <p>Wooden Toys</p>
                  <p>Feeding bottle</p>
                  <p>Winter Clothes</p>
                  <p>Shoes</p>
                  <p>Jeans</p>
                </div>
                <div className='col-md-9'>
                   <div className='shop-head'>
                   <DropdownButton style={{width:'30%'}} as={ButtonGroup} title="Paginate By" id="bg-nested-dropdown">
                   {
                    pageNumbers.map(number=>(
                    <Dropdown.Item eventKey="1" key={number}  onClick={()=>paginate(number)}>
                    {number}                
                    </Dropdown.Item>       
                     ))
                     }     
                    </DropdownButton>
                   <DropdownButton style={{width:'30%'}} as={ButtonGroup} title="Sort By" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Best Selling</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Price, Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Date, New to Old</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Size XL to M</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Color</Dropdown.Item>
                    </DropdownButton>
   
                   </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                {currentPosts.map(pd=><div
                className="" key={pd.id}>   
                 <div className='image-div'>
                 <img className="img-fluid" src={pd.img} alt="" />
                 </div>
                 <div className='details-div'>
                 <p>{pd.name}</p>
                 <p>Price: ${pd.Price}.00</p>
                 <p className="">Warrenty: <small>{pd.warrenty}</small> years</p>
                 <Link to={`/order/${pd._id}`}>
                 <button style={{width:'100%',height:'3rem'}} className="bg-info text-white btn"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
                  </Link>   
                 </div>
                </div>)
                 } 
                </div>
                </div>                
               </div> 
              
              }  
        <Footer></Footer>
        </div>
    );
};

export default ExploredPd;