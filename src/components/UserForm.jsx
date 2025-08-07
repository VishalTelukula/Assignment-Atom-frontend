import { useState } from 'react';
import { createUser } from '../services/userService';

function UserForm({ onUserAdded }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setError('Both fields are required');
      return;
    }

    setError(null);

    createUser({ firstName, lastName })
      .then(() => {
        setFirstName('');
        setLastName('');
        onUserAdded();
      })
      .catch(() => {
        setError('Failed to add user. Please try again.');
      });
  };

  return (
   <div>
  <form onSubmit={handleSubmit} className="user-form">
    <div className="form-field">
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>

    <div className="form-field">
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>

    <button type="submit">Submit</button>
  </form>

  {error && <p style={{ color: 'red' }}>{error}</p>}
</div>

  );
}

export default UserForm;
