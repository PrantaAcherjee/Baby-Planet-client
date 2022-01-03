import React from 'react';
import "./GiveReviews.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
 

const GiveReviews = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://quiet-hamlet-36498.herokuapp.com/reviews',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
        
             
            <div className="manage-service whole-bg">
            <br />
            <h2 className="h-2">Give Your Valuable Reviews</h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("Name")} placeholder="Name"/>
            <textarea {...register("description")} placeholder="What is your feadback ?" />

            <input 
            placeholder="Rating between 1 to 5"
            {...register("ratings", { required: true })}
            />
             
            <input type="submit" />
            </form>
        </div>
         
    );
};

export default GiveReviews;