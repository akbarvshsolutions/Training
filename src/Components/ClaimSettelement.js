import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Claimsettelement() {
  const [approve, setApprove] = useState([]);
  const [reject, setReject] = useState([]);
  const [allclaims, setAllclaims] = useState([]);
  const [policyname, setPolicyname] = useState('');
  const [amount, setAmount] = useState('');
  const [maxClaimLimit, setMaxClaimLimit] = useState('');

  const data = [ "Name", "policy", "premium", "MaxLimit", "ReqAmount"];
  const params = useParams();

  useEffect(() => {
    getClaimData();
    
  }, []);

  const getClaimData = async () => {
    try {
      const response = await axios.get('http://localhost:5050/claimUserPolicy');
      setAllclaims(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (claim) => {
    try {
      const response = await axios.post('http://localhost:5050/approveclaimsettlement', {
        name: claim.name,
        policyName: claim.policyName,
        policyAmount: claim.policyAmount,
        policyAmountLimit: claim.policyAmountLimit,
        requestedAmt: claim.requestedAmt,
      });
      setApprove((prev) => [...prev, response.data]); // add the newly approved claim to the list of approved claims
      // set any state variables you need to update
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (claim) => {
    try {
      const response = await axios.post('http://localhost:5050/rejectclaimsettlement', {
        name: claim.name,
        policyName: claim.policyName,
        policyAmount: claim.policyAmount,
        policyAmountLimit: claim.policyAmountLimit,
        requestedAmt: claim.requestedAmt,
      });
      console.log(response.data);
      setReject((prev) => [...prev, response.data]); // add the newly approved claim to the list of approved claims
      // set any state variables you need to update
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-80'>
      <div className="claimsettelementMain">
        <div className='claimsettelement'>
          {data.map((ele, i) => {
            return <p key={i}>{ele}</p>;
          })}
        </div>
        <div>
        {allclaims.map((item) => (
  <div className='claimsettelementItems' key={item.id}>
              <p>{item.name}</p>
              <p>{item.policyName}</p>
              
              <p>{item.policyAmount}</p>
              <p>{item.policyAmountLimit}</p>
              <p>{item.requestedAmt}</p>
              <p>
                <button type="button" onClick={() => handleApprove(item)}>Approve</button>
                <button type="button" onClick={() => handleReject(item)}>Reject</button>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='my-2'>

        <center>
          <h4 className='bg-success w-25'>Approved policies</h4>
          <table border="1">

            <thead>
              <tr>

                <th>Name</th>
                <th>Policy</th>
                <th>Policy Amount</th>
                <th>MaxLimit</th>
                <th> ReqAmount</th>

              </tr>
            </thead>


            <tbody>

            {approve.map((claim) => (
                <tr key={claim.id}>
                  <td>{claim.name}</td>
                  <td>{claim.policyName}</td>
                  <td>{claim.policyAmount}</td>
                  <td>{claim.policyAmountLimit}</td>
                  <td>{claim.requestedAmt}</td>
                </tr>
              ))}

            </tbody>



          </table>
        </center>
      </div>
      <div>
        
        <center>
        <h4 className='bg-danger w-25'>Reject policies</h4>
            <table border="1">
           
        <thead>
        <tr>
        
          <th>Name</th>
          <th>Policy</th>
          <th>Policy Amount</th>
          <th>MaxLimit</th>
          <th> ReqAmount</th>
         
        </tr>
        </thead>
     

        <tbody>
        
        {reject.map((claim) => (
                <tr key={claim.id}>
                  <td>{claim.name}</td>
                  <td>{claim.policyName}</td>
                  <td>{claim.policyAmount}</td>
                  <td>{claim.policyAmountLimit}</td>
                  <td>{claim.requestedAmt}</td>
                </tr>
              ))}
          
        </tbody>



      </table>
      </center>
      </div>
    </div>
  );
}

export default Claimsettelement;
