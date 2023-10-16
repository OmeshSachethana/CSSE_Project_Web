// src/user/components/Register.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleRegister = () => {
    console.log('Register button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Display Name:', displayName);
  
    dispatch(registerUser({ email, password, displayName }));
  };
  

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
