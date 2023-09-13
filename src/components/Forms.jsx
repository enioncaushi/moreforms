import React, { useState } from 'react';


const Error = ({ message }) => <div className="error">{message}</div>;

const Form = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const [firstError, setFirstError] = useState('');

  
  const validateForm = () => {
    const validations = [
      [firstName.length < 2, 'First Name must be at least 2 characters'],
      [lastName.length < 2, 'Last Name must be at least 2 characters'],
      [email.length < 5, 'Email must be at least 5 characters'],
      [password.length < 8, 'Password must be at least 8 characters'],
      [password !== confirmPassword, 'Passwords must match'],
    ];

    for (const [condition, errorMessage] of validations) {
      if (condition) {
        setFirstError(errorMessage);
        return false;
      }
    }

    
    setFirstError('');
    return true;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
     
      console.log('Form submitted:', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
    }
  };

  return (
    <div>
  
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {firstError && <Error message={firstError} />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
