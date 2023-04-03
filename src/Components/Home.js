import React, { useEffect, useState } from 'react';
import jsonData from '../api.json';


const personpolicyclaims = jsonData.data.transactions.personpolicyclaims;
const person1 = jsonData.data.master.person


function Home() {
  const [approve, setApprove] = useState([])

  const [reject, setReject] = useState([])

  useEffect(() => {
    const personpolicyclaims = jsonData.data.transactions.personpolicyclaims;
    const person1 = jsonData.data.master.person;

    personpolicyclaims.forEach((transaction) => {
      const person = person1.find(pers => transaction.pid === pers.pid);
      if (transaction.isapprove === true) {
        setApprove(person);
      } else {
        setReject(person);
      }
    })
  }, []);
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