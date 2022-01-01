import React ,{useState,useEffect}from 'react';


const MyOrder = () => {
    const [myOrders,setMyOrders]=useState([]);
    useEffect(()=>{
        fetch('https://quiet-hamlet-36498.herokuapp.com/orders')
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
            console.log(data);
            alert('Deleted One');
            const remaining=myOrders.filter(pd=>pd._id!==id);
            setMyOrders(remaining);
        })
    }
    return (
        <div>
            <h2 className="h-2">My all orders</h2>
             
            <div class="row row-cols-1 row-cols-md-1 pack-div w-50 mx-auto">
            {myOrders.map(pd=><div
            className="col single-pack" key={pd._id}>
             <h2 className="name-color"> Client Name: {pd.name}</h2>
            <h5>Email: {pd.email}</h5>
            <h6>Product Key: {pd.Key}</h6>
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