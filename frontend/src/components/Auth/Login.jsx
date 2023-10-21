import React, { useState } from 'react';
import firebase from '../../config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Signed In');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;