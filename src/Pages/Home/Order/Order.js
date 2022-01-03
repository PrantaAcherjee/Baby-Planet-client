import React, { useEffect,useState } from 'react';
import "./Order.css"
import { useParams } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';
import { useForm } from "react-hook-form";



const Order = () => {
    const {_id}=useParams();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user}=UseAuth();
    const [order,setOrder]=useState({});
    useEffect(()=>{
       fetch(`https://quiet-hamlet-36498.herokuapp.com/products/${_id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[_id])
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
        <div className="row pt-5">
        <h2 className="h-2">Get Your Product Soon</h2>
        <div className="col-md-7">
        <h2 className="text-success">Name: {order.name}</h2>
        <img src={order.img} alt="" />
        <br />
        <p>Price: ${order.Price}</p>
        </div>
       <div className="col-md-5">
       <h2 className="h-2">Confirm Order</h2>

    <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue={user.displayName} {...register("name",{ required: true })} />
    <input defaultValue={user.email} {...register("email", { required: true })} />
    <input placeholder="Service Name" defaultValue={order.name} {...register("Service Name",{required:true})}  />
    <input placeholder="Adress" defaultValue="" {...register("adress")} />
    <input placeholder="Phone" defaultValue="" {...register("phone")} />
    {errors.email && <span className="error">This field is required</span>}
    <input type="submit" />
    </form>

    </div>
         
    </div>
    );
};

export default Order;