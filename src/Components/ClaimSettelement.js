import React, { useEffect, useState } from 'react';
import jsonData from '../api.json';


function Claimsettelement() {
  const [approve, setApprove] = useState([])

  const [reject, setReject] = useState([])
  const personData = jsonData.data.master.person
  const policy = jsonData.data.master.policys

  const personpolicyclaims = jsonData.data.transactions.personpolicyclaims;
  const data = ["#", "Name", "policy", "premium", "MaxLimit", "ReqAmount"]


  useEffect(() => {

    {
      personpolicyclaims.map((transaction, key) => {
        if (transaction.isapprove == true) {
          {
            personData.map(pers => {

              if (transaction.pid === pers.pid) {
                setApprove(pers)
              }
            })

          }
        } else {
          {
            personData.map(pers => {
              if (transaction.pid === pers.pid) {
                setReject(pers)
              }
            })
          }

        }


      })
    }
  })
  return (
    <div className='w-80'>
      <div className="claimsettelementMain">
        <div className='claimsettelement'>
          {data.map((ele, i) => {
            return <p>{ele}</p>
          })}
        </div>
        <div>
          {personData.map((ele, i) => {
            return <div className='claimsettelementItems'>
              <p>{ele.pid}</p>
              <p>{ele.name}</p>
              <p>{policy[i].name}</p>
              <p>{policy[i].amt}</p>
              <p>{policy[i].maxLimit}</p>
              <p>2000</p>
              <p><button type="button" class="btn btn-outline-success">Approve</button></p>
              <p><button type="button" class="btn btn-outline-danger">Reject</button></p>
            </div>
          })}
        </div>
      </div>
      <div className='m-4'>
        <table className=' headtable m4-4 p-0 table table-dark '>
          <thead>
            <th>#</th><th>Name</th><th>Policy</th><th>premium</th><th>MaxLimit</th><th>ReqAmount</th>
          </thead>
        </table>
        <table  >
          <div><p className='text-white bg-success'>approved</p></div>
          <tbody class="table table-bordered">

            <th>#</th><th>Name</th>

            <tr><td>{approve.pid}</td><td>{approve.name}</td></tr>

          </tbody>
        </table>

        <table  >
          <div> <p className='text-white bg-danger'>rejected</p></div>
          <tbody class="table table-bordered">

            <th>#</th><th>Name</th>

            <tr><td>{reject.pid}</td><td>{reject.name}</td></tr>

          </tbody>
        </table>



      </div>

    </div>
  );
}

export default Claimsettelement;





// import React from 'react';
// import jsonData from '../api.json';

// const personpolicyclaims = jsonData.data.transactions.personpolicyclaims;

// function claimsettelement() {
//   return (
//     <div>
//       <h2>Transactions</h2>
//       <ul>
//         {personpolicyclaims.map((transaction) => (
//           <li key={transaction.pid}>
//             <span>Total Amount: {transaction.totalAmt}</span>
//             <span>Approved: {transaction.isapprove.toString()}</span>
//             <span>Rejected: {transaction.isreject.toString()}</span>
//             <span>Applied: {transaction.isapplied.toString()}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default claimsettelement;
