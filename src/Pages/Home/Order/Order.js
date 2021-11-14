import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

const Order = () => {
    const {_id}=useParams();
    const [order,setOrder]=useState({});
    useEffect(()=>{
       fetch(`https://quiet-hamlet-36498.herokuapp.com/products/${_id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    return (
        <div>
        <h2 className="h-2">Get Your Product Soon</h2>
        <h2 className="text-success">Name: {order.name}</h2>
        <img src={order.img} alt="" />
        <br />
        <p>Price: ${order.Price}</p>
         
        <Link to={`/confirm/${order._id}`}>
        <button className="text-white bg-info">Confirm Order</button>
        </Link>
        </div>
    );
};

export default Order;