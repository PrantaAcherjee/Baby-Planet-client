import React from 'react';
import "./AddProducts.css"
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://quiet-hamlet-36498.herokuapp.com/products',data)
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
            <h2 className="h-2">Add Products</h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name")} placeholder="Name"/>
            <input {...register("warrenty")} placeholder="warrenty" />
             <input type="number" {...register("Price")} placeholder="Price"/>
             <input {...register("img")} placeholder="image URL" />
            <input type="submit" />
                </form>
        </div>
         
    );
};

export default AddProducts;