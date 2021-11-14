import React ,{useState,useEffect}from 'react';

const Reviews = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://quiet-hamlet-36498.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[])
    return (
        <div>
            <h2 className="h-2">CUSTOMER REVIEWS</h2>
             
            <div class="row row-cols-1 row-cols-md-2 pack-div w-50 mx-auto">
            {review.map(pd=><div
            className="col single-pack" key={pd._id}>
             <h2 className="name-color"> Client Name: {pd.name}</h2>
        <h5>Name: {pd.Name}</h5>
        
        <p>Comment:{pd.description}</p>
    
        </div>)


  }
  
</div> 
        </div>
    );
};

export default Reviews;