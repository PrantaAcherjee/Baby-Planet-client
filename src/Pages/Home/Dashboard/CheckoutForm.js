import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from './../../../Hooks/UseAuth';

const CheckoutForm = ({pay}) => {
const {price,_id}=pay
const {user}=useAuth()
const [error,setError]=useState('');
const [success,setSuccess]=useState('');
const [processing,setProcessing]=useState(false);
const [clientSecret,setClientSecret]=useState('');
useEffect(()=>{
fetch('https://quiet-hamlet-36498.herokuapp.com/create-payment-intent',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({price})
})
.then(res=>res.json())
.then(data=>setClientSecret(data.clientSecret))
},[price])

const stripe = useStripe();
const elements = useElements();
const handleSubmit=async(e)=>{
e.preventDefault();
    if (!stripe || !elements) {
    return;
    }
     const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    setProcessing(true)
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        setError(error.message);
        setSuccess('')
      } else {
        setError('')
        console.log('[PaymentMethod]', paymentMethod);
      }
      // payment intent
      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email:user.email,
            },
          },
        },
      );
      if(intentError){
          setError(intentError.message);
          setSuccess('')
          setProcessing(false)
      }
      else{
          setError('')
          console.log(paymentIntent)
          setSuccess('Payment processed sucessfully')
          setProcessing(false)
          // update to db
          const payment={
            amount:paymentIntent.amount,
            transaction:paymentIntent.client_secret.slice('_secret')[0],
            created:paymentIntent.created,
            last4:paymentMethod.card.last4,
          }
          const url=`https://quiet-hamlet-36498.herokuapp.com/orders/${_id}`;
          fetch(url,{
              method:'PUT',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(payment)
          })

      }
}
    return (
    <div>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {processing? <Spinner animation="grow" variant="primary" />:<button className='mt-4 bg-info text-white' type="submit" disabled={!stripe ||success}>
        Pay ${price}
      </button>}
    </form>
    <p className='text-danger m-3'>{error}</p>
    <p className='text-success m-3'>{success}</p>
    </div>
    );
};

export default CheckoutForm;