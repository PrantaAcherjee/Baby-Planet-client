import React ,{useState,useEffect}from 'react';
import UseAuth from './../../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const {user}=UseAuth();
    const [myOrders,setMyOrders]=useState([]);
    useEffect(()=>{
        fetch(`https://quiet-hamlet-36498.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrders(data));
    },[user.email])

    const handleRemove=id=>{
        const url=`https://quiet-hamlet-36498.herokuapp.com/orders/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Deleted One');
            const remaining=myOrders.filter(pd=>pd._id!==id);
            setMyOrders(remaining);
        })
    }
    return (
        <div className='py-4'>
            <h3 className="text-secondary">SHOPPING BAG</h3>
            <div class="row row-cols-1 row-cols-md-1  w-50 mx-auto">
            {myOrders.map(pd=><div
            className="col single-pack" key={pd._id}>
            <p>Baby Walker</p>
            <small>{pd._id}</small>
            <p>Email: {pd.email}</p>
            <p>Phone: <small>{pd.phone}</small></p>

        {/* delete Button */}
        <button className='bg-danger text-white' onClick={()=>handleRemove(pd._id)}>Remove From Cart</button>
        {pd.payment? <button className='bg-info text-white mx-2 px-2'>Paid</button>
        :
        <Link to={`/dashboard/payments/${pd._id}`}>
        <button className='bg-success text-white mx-2 '>Payment</button>
        </Link>}
        </div>)

  } 
</div> 
</div>
    );
};

export default MyOrder;