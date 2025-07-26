import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';
import Reporting from './Reporting';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </Router>
  );
}

export default App;
