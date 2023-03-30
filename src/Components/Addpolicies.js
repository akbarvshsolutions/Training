import React, { useEffect, useState } from 'react';
import "../App.css";
import jsonData from '../api.json';


function AddPolicies() {

    const [policy, setPolicy] = useState([])
    const [amount, setAmount] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [maxClaimLimit, setMaxClamLimit] = useState('')
    useEffect(() => {
        const policy1 = jsonData.data.master.policys;
        setPolicy(policy1)
        console.log("max Claim Limit:", maxClaimLimit)
    })
    const handleSumbit = (event) => {
        event.preventDefault();
        console.log("max Claim Limit:", maxClaimLimit)
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value <= 20000) {
            setInputValue(value);
        } else {
            alert('should not exceed 20000')
        }
    };
    return (
        <div className='m-4'>
            <form className='bg-light col-lg-6 card rounded-3 text-black p-4'>
                <form onSubmit={handleSumbit}>
                    <div className="form-outline mb-2">
                        <label className="form-label" for="form2Example11">FirstName</label>
                        <input type="text" id="form2Example11" className="form-control"
                            placeholder="your name" />
                    </div>
                    <div className="form-outline ">
                        <label className="form-label" for="form2Example11">Policy Name</label>
                        <select className="  form-control" id="form2Example11" >
                            {policy.map(dropdown => {
                                return <option key={dropdown.iid} value={dropdown.name}>
                                    {dropdown.name}</option>;
                            })
                            }
                        </select>
                    </div>
                    <div className="form-outline mb-2">
                        <label className="form-label" for="form2Example11">Amount</label>
                        <input type="number" id="form2Example11" className="form-control"
                            placeholder="Amount" value={amount} onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="form-outline mb-2">
                        <label htmlfor="max-claim-limit">Max Claim Limit</label>
                        <input
                            type="number"
                             id="form2Example11"
                            className="form-control"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-success btn-sm btn-block" type="button">Submit</button>
                    </div>
                </form>
            </form>
        </div>
    )
}
export default AddPolicies