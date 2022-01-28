import React ,{useState,useEffect}from 'react';
import UseAuth from './../../../Hooks/UseAuth';

const MyOrder = () => {
    const {user}=UseAuth();
    const [myOrders,setMyOrders]=useState([]);
    useEffect(()=>{
        fetch(`https://quiet-hamlet-36498.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrders(data));
    },[])

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
            <h2 className="h-2">SHOPPING BAG</h2>
             <br />
            <div class="row row-cols-1 row-cols-md-1 pack-div w-50 mx-auto">
            {myOrders.map(pd=><div
            className="col single-pack" key={pd._id}>
             <h4 className="name-color"> Client Name: {pd.name}</h4>
            <h5>Email: {pd.email}</h5>
            <p>Phone: <small>{pd.phone}</small></p>

        {/* delete Button */}
        <button onClick={()=>handleRemove(pd._id)}>Remove From Cart</button>
    
        </div>)

  } 
</div> 
</div>
    );
};

export default MyOrder;