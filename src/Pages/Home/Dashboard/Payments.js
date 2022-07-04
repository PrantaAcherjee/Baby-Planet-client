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
        <div className='payment-page'>
            <h5>Payment with Debit/Credit card</h5>
            <h6>Amount to be paid: ${pay.price}</h6>
            {pay?.price &&
            <Elements stripe={stripePromise}>
            <CheckoutForm pay={pay} />
            </Elements>
            }
            <div className='cards'>
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-stripe"></i>
            <i class="fa-brands fa-cc-paypal"></i>
            </div>
        </div>
    );
};

export default Payments;