import React from 'react';
import "./GiveReviews.css"
import { useForm } from "react-hook-form";
import axios from 'axios';

const GiveReviews = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
        
             
            <div className="manage-service">
                <br />
            <h2 className="h-2">Give Reviews your own</h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("Name")} placeholder="Name"/>
            <textarea {...register("description")} placeholder="Description" />
             <input {...register("img")} placeholder="image URL" />
            <input type="submit" />
                </form>
        </div>
         
    );
};

export default GiveReviews;