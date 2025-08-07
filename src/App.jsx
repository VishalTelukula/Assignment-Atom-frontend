import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { getUsers } from './services/userService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = () => {
    setLoading(true);
    getUsers()
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers(); // Fetch users on first load
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Atom Technologies - User List</h1>
      <UserForm onUserAdded={loadUsers} />
      <UserTable users={users} loading={loading} />
    </div>
  );
}

export default App;
