import React, { useEffect, useState } from 'react';
import jsonData from '../api.json';


function ClaimPolicy() {
  const personData = jsonData.data.master.person
  const policy = jsonData.data.master.policys
  const data = ["#", "Name", "policy", "premium", "MaxLimit", "ReqAmount"]
  return (
    <div className="claimPolicyMain">
      <div className='claimPolicy'>
        {data.map((ele, i) => {
          return <p>{ele}</p>
        })}
      </div>
      <div>
        {personData.map((ele, i) => {
          return <div className='claimPolicyItems'>
            <p>{ele.pid}</p>
            <p>{ele.name}</p>
            <p>{policy[i].name}</p>
            <p>{policy[i].amt}</p>
            <p>{policy[i].maxLimit}</p>
            <p><input /></p>
            <p><button type="button" class="btn btn-outline-primary">claim</button></p>
          </div>
        })}
      </div>
      {/* <table border="1">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Policy</th>
          <th>premium</th>
          <th>MaxLimit</th>
          <th> ReqAmount</th>
          <th>claim</th>
        </tr>
        </thead>
     

        <tbody>
          {personData.map((item, i) =>
            <tr>
              <td>{item.pid}</td>
              <td>{item.name}</td>
              <td>{policy[i].name}</td>
              <td>{policy[i].amt}</td>
              <td>{policy[i].maxLimit}</td>
              <td><input /></td>
              <td><button type="button" class="btn btn-outline-primary">claim</button></td>
            </tr>
          )}
        </tbody>



      </table> */}

    </div>
  );
}

export default ClaimPolicy;
