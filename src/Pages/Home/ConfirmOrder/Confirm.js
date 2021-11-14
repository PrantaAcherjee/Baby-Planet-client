import React from 'react';
import "./Confirm.css"
import { useForm } from "react-hook-form";
import UseAuth from '../../../Hooks/UseAuth';
import { useParams } from 'react-router';


const Confirm = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user}=UseAuth();
    const {_id}=useParams();
  const onSubmit = data => {
    console.log(data);
    data.email = user?.email;
    fetch("https://quiet-hamlet-36498.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>{
        if(result.insertedId){
          alert('order successfully confirmed');
          reset();
        }
      });
    
  }
    return (
        <div>
            <h2 className="h-2">Confirm Order</h2>

        <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name",{ required: true })} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      <input defaultValue={_id} {...register("Key", { required: true })} />
      <input placeholder="Adress" defaultValue="" {...register("adress")} />
      <input placeholder="Service Name" defaultValue="" {...register("Service Name")} />
      <input placeholder="Phone" defaultValue="" {...register("phone")} />
         {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Confirm;