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
      <h1>Home</h1>
    </div>
  );
}
export default Home;