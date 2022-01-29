import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KIFsQKWnfV6DXSxkdtlNUc0lYBCpmMok91Ef8cCqljvsbKbeOBl9uAIQEZ0u6rfU0Jz4ocMokJqx2AkCTAYqMYi00yvSztWws');

const Payments = () => {
const {productID}=useParams();
const [pay,setPay]=useState([])
useEffect(()=>{
fetch(`https://quiet-hamlet-36498.herokuapp.com/orders/${productID}`)
.then(res=>res.json())
.then(data=>setPay(data))
},[productID])
    return (
        <div className='pt-4'>
            <h4><i class="fas fa-money-check-alt text-success"></i> PAY YOUR CHARGE WITH STRIPE</h4>
            <h4>Baby Walker</h4>
            <h5 className='mb-5'>Please pay: ${pay.price}</h5>
            {pay?.price &&
                <Elements stripe={stripePromise}>
            <CheckoutForm pay={pay} />
            </Elements>
            }
        </div>
    );
};

export default Payments;