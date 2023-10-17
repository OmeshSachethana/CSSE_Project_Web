import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/userActions';
import logo from '../../assets/logo.png'; // Import your logo

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg text-center">
      <img src={logo} alt="Logo" className="w-32 mx-auto mb-6" /> {/* Adjust logo width */}
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="text"
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        type="text"
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
