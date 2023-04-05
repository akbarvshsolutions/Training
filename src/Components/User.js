import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  useEffect(() => {
    getUsers();
    console.log("ll",newName)
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5050/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.trim()) {
      try {
        const response = await axios.post('http://localhost:5050/users', {
          name: user,
        });
        getUsers();
        setUser('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setNewName({...newName, name: e.target.value});
  };
  
  const handleEdit = async (id, name) => {
    try {
      const response = await axios.put(`http://localhost:5050/users/${id}`, {
        name: name.name,
      });
      setNewName('');
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5050/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New User</h2>
        <input type="text" placeholder="Enter name" className='m-2' value={user} onChange={(e) => setUser(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <table className='m-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                {user._id === newName._id ? (
                  <input type="text" value={newName.name} onChange={handleChange} />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {user._id === newName._id ? (
                  <button className='mx-2 btn btn-success' onClick={() => handleEdit(user._id, newName)}>Save</button>

                ) : (
                  <button className='mx-2 btn btn-primary' onClick={() => setNewName(user)}>Edit</button>
                )}
                <button className='mx-2 btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
