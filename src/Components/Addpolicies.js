import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";

function AddPolicies() {
  
  const [policyname, setPolicyname] = useState('');
  const [amount, setAmount] = useState('');
  const [maxClaimLimit, setMaxClaimLimit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/policy', {
  
        "policyName": policyname,
        "policyAmount": amount,
        "policyAmountLimit": maxClaimLimit,
      });
      console.log(response.data);
      setPolicyname('')
      setAmount('')
      setMaxClaimLimit('')
    } catch (error) {
      console.log(error);
    }
   
   
  };


  const handlePolicynameChange = (e) => {
    setPolicyname(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleMaxClaimLimitChange = (e) => {
    const { value } = e.target;
    if (parseInt(value)  >= parseInt(amount) ) {
        alert("Please enter a value less than or equal to the policy amount.");
     }else{
        setMaxClaimLimit(value);
     } 
  };
  
  

  return (
    <div className='m-4'>
      <form className='bg-light col-lg-6 card rounded-3 text-black p-4' onSubmit={handleSubmit}>
       
        <div className='form-outline'>
          <label className='form-label' htmlFor='policyname'>Policy Name</label>
          <input
          type='text'
          id='policyname'
          name='policyname'
          onChange={handlePolicynameChange}
          placeholder='Policy name'
          value={policyname}
          className='form-control'
        />
        </div>
        <div className='form-outline mb-2'>
          <label className='form-label' htmlFor='amount'>Amount</label>
          <input
          type='number'
          id='amount'
          name='amount'
          onChange={handleAmountChange}
          placeholder='Amount'
          value={amount}
          className='form-control'
        />
          
        </div>
        <div className='form-outline mb-2'>
          <label className='form-label' htmlFor='maxClaimLimit'>Max Claim Limit</label>
          <input
  type='number'
  id='maxClaimLimit'
  name='maxClaimLimit'
  onChange={handleMaxClaimLimitChange}
  className='form-control'
  placeholder='Max claim limit'
  value={maxClaimLimit}
/>

            </div>
            <div className='d-grid gap-2'>
            <button className='btn btn-success btn-sm btn-block' type='submit'>
            Submit
            </button>
            </div>
            </form>
            </div>
            );
            }
            
            export default AddPolicies;