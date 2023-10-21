import React, { useState } from 'react';
import firebase from '../../config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Signed In');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterClick = () => {
    navigate('/home'); // Navigating to the register page
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component here */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="p-12 bg-white rounded shadow-xl w-96">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <input 
            type="email" 
            onChange={e => setEmail(e.target.value)} 
            className="w-full p-2 mb-6 text-primary border-b-2 border-primary outline-none focus:bg-gray-100"
            placeholder="Email"
          />
          <input 
            type="password" 
            onChange={e => setPassword(e.target.value)} 
            className="w-full p-2 mb-6 text-primary border-b-2 border-primary outline-none focus:bg-gray-100"
            placeholder="Password"
          />
          <button 
            onClick={signIn} 
            className="w-full bg-primary hover:bg-secondary text-black font-semibold p-2 mt-5 rounded"
          >
            Sign In
          </button>
          <p className="mt-4 text-sm text-center">
            You don't have an account. 
            <span 
              className="text-blue-500 cursor-pointer"
              onClick={handleRegisterClick}
            >
              Please register
            </span>
          </p>
        </div>
      </div>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default Login;
