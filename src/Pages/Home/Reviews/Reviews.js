import React ,{useState,useEffect}from 'react';
import './Reviews.css';
 

const Reviews = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://quiet-hamlet-36498.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[])
    return (
        <div>
            <h2 className="text-secondary pt-5 px-3">USER'S FEADBACK </h2>
            <br />
           <div class="row row-cols-2 row-cols-md-4  w-75 mx-auto ">
            {review.map(pd=><div
             key={pd._id}>            
            <div className='single-div'>
            <h5>{pd.Name}</h5>      
            <p>{pd.description}</p>
            
            </div>
    
        </div>)
  } 
        </div> 
        </div>
    );
};

export default Reviews;