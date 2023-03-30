import React, { useEffect, useState } from 'react';
import jsonData from '../api.json';


const personpolicyclaims = jsonData.data.transactions.personpolicyclaims;
const person1 = jsonData.data.master.person


function Home() {
  const [approve, setApprove] = useState([])

  const [reject, setReject] = useState([])

  useEffect(() => {

    {
      personpolicyclaims.map((transaction, key) => {
        if (transaction.isapprove == true) {
          {
            person1.map(pers => {

              if (transaction.pid === pers.pid) {
                setApprove(pers)
              }
            })

          }
        } else {
          {
            person1.map(pers => {
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
  );
}


export default Home;