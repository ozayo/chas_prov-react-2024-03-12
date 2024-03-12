import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './usersSlice';

const Users = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
    setName('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <button type="submit" onClick={handleSubmit}>Add new</button>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
