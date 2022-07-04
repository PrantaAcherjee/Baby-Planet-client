import React ,{useState,useEffect}from 'react';
import Rating from 'react-rating';
import './Reviews.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  initialSlide: 2,
                   
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
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://quiet-hamlet-36498.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
        
    },[])
    return (
        <div style={{marginBottom:'5rem'}}>
            <h2 className="h2 my-5">Testimonials</h2>
           <div>
           <Slider {...settings}>
           {review.map(pd=><div
             key={pd._id}>            
            <div className='single-review'>
            <h2><i class="fa-solid fa-circle-user text-secondary fs-1"></i></h2>
            <h5 className='text-success'>{pd.Name}</h5>      
            <p>
            <small>{pd.description.slice(0,100)}</small>
            </p>           
            <Rating
            initialRating={pd.ratings}
            emptySymbol="far fa-star style"
            fullSymbol="fas fa-star style"
            readonly></Rating>           
            </div>
    
        </div>)
  }  
     </Slider>
           
        </div> 
        </div>
    );
};

export default Reviews;