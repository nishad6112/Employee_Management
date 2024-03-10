import React, { useState } from 'react';
import Header from '../dashboard/Header';

const Login = () => {
    // State to hold login credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Add your login logic here
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    // };

  return (
    <div>
      <Header/>
        <div className="small-container">
      <form>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
      </div>
      </div>
    );
};

export default Login;
