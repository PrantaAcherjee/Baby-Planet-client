import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import UseAuth from '../../../Hooks/UseAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const [success,setSuccess]=useState(false);
    const {token}= UseAuth();

    const handleOnblur=(e)=>{
    setEmail(e.target.value);    
    }
    const handleMakeAdmin=(e)=>{
    const user={email}
    e.target.reset() 
    fetch(' https://quiet-hamlet-36498.herokuapp.com/users/admin',{
        method:"PUT",
        headers:{
            'authorization':`Bearer ${token}`,
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount){
              setSuccess(true);
            
          }
        })

     
     e.preventDefault()
    }
    return (
        <div className='row col-sm-12 pt-5'>
            <h2>Make an admin</h2>
            <br />
            <div>
                <form onSubmit={handleMakeAdmin}>
                <input onBlur={handleOnblur} type="email" placeholder='Email'/> 
                <input className='bg-info text-white fw-bold' type="submit" value="Make Admin" />
                </form>
                <br />
              {
                  success &&
                  <Alert variant='success'>
                   Successfully make an admin !
                   </Alert>
              }  
            </div>
        </div>
    );
};

export default MakeAdmin;