import React from 'react'

const Features = () => {
  return (
    <div className='row p-4'>
      <h3>Kids Accessories n Toys</h3>
      <h1 className="text-danger fw-bold">Bingo Lingo</h1>
      <p className='fw-500'>We create the best toy for your <br/> kids with safe plastic.</p>
        <div className='col-md-3'>
        <div style={{marginBottom:'10px'}}>
        <img className='img-fluid' src='https://cdn.shopify.com/s/files/1/0119/4632/8123/files/img1_83e6a9d2-44f2-4299-9a0c-1bbcfa6678fc_large.jpg?v=1631703642' alt=''/>
        </div> 
        <div style={{marginBottom:'10px'}}>
        <img  className='img-fluid' src='https://cdn.shopify.com/s/files/1/0119/4632/8123/files/img2_a6be5881-5851-4b27-82b6-6efe94215f0a_large.jpg?v=1631704147' alt=''/>
        </div> 
        </div>

        <div className='col-md-6'>
        <div style={{marginBottom:'10px'}}>
        <img style={{height:'437px',objectFit:'cover'}}  className='img-fluid' src='https://cdn.shopify.com/s/files/1/0119/4632/8123/files/img3_910x690_a9c0c035-d879-43db-9d94-686421f0c588.jpg?v=1632820675' alt=''/>
        </div> 
        </div>

        <div  className='col-md-3'>
        <div style={{marginBottom:'10px'}}>
        <img  className='img-fluid' src='https://cdn.shopify.com/s/files/1/0119/4632/8123/files/img4_c25cf204-4386-4312-b14d-68a88a2978da_large.jpg?v=1631704175' alt=''/>
        </div> 
        <div style={{marginBottom:'10px'}}>
        <img  className='img-fluid' src='https://cdn.shopify.com/s/files/1/0119/4632/8123/files/img5_5433a73a-9892-458b-a1d1-f8cf03efb722_large.jpg?v=1631704190' alt=''/>
        </div> 
        </div>    
    </div>
  )
}

export default Features