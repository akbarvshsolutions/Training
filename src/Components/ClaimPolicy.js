import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ClaimPolicy() {
  const navigate = useNavigate()
  const data = ["#", "Name", "policy", "premium", "MaxLimit", "ReqAmount"];
  const [allpolices, setAllpolices] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState('');
  
  const [requestamount, setRequestAmount] = useState('');
  const [allusers, setAllusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    policesdata();
    userdata();
  }, []);

  const policesdata = async () => {
    try {
      const response = await axios.get('http://localhost:5050/policy');
      setAllpolices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userdata = async () => {
    try {
      const response = await axios.get('http://localhost:5050/users');
      setAllusers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userhandleSelect = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedPolicy(e.target.value);
  };


  const handleSubmit = async () => {
    const selectedUserData = allusers.find(user => user._id === parseInt(selectedUser));
    const selectedPolicyData = allpolices.find(policy => policy._id === parseInt(selectedPolicy));

    

      setSelectedData([...selectedData, { user: selectedUserData, policy: selectedPolicyData }]);
      
   
    setSelectedUser('')
      setSelectedPolicy('')

  };
  
  const handlerequestamount = (e) => {
    setRequestAmount(e.target.value)
  }
  const handleclaim = async(id) => {
    navigate(`/claimsettelement/${id}`);
 
    try {
      const response = await axios.post('http://localhost:5050/claimUserPolicy', {
  
      "name": selectedData[0].user.name,
      "policyName": selectedData[0].policy.policyName,
      "policyAmount": selectedData[0].policy.policyAmount,
      "policyAmountLimit": selectedData[0].policy.policyAmountLimit,
      "requestedAmt": requestamount
      });
   

    } catch (error) {
      console.log(error);
    }
  }


  const renderpolicies = allpolices.map((item) => (
    <option key={item._id} value={item._id}>
      {item.policyName}
    </option>
  ));

  const renderusers = allusers.map((item) => (
    <option key={item._id} value={item._id}>
      {item.name}
    </option>
  ));

  return (
    <div className="claimPolicyMain mx-4">
      <center>
        <div className="m-4 w-25">
          <select
            placeholder="policies"
            className="form-control w-10 m-2"
            value={selectedUser}
            onChange={userhandleSelect}
          >
            <option value="">Select user</option>
            {renderusers}
          </select>
          <select
            placeholder="policies"
            className="form-control w-10 m-2"
            value={selectedPolicy}
            onChange={handleSelect}
          >
            <option value="">Select a policy</option>
            {renderpolicies}
          </select>

          <button className="btn btn-primary mt-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              {data.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.user.name}</td>

                <td>{item.policy.policyName}</td>
                <td>{item.policy.policyAmount}</td>
                <td>{item.policy.policyAmountLimit}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Request Amount"
                    onChange={handlerequestamount}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleclaim(item.policy._id)}
                  >
                    Claim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default ClaimPolicy;
