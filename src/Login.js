import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Fake auth check
    if (username && password) {
      navigate('/dashboard');
    } else {
      alert('Enter username and password');
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Password: </label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
