import './App.css';
import Page from './Page.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './AdminDashboard.js';
import ManagerDashboard from './ManagerDashboard.js';
import EmployeeDashboard from './EmployeeDashboard.js';
import UserDashboard from './UserDashboard.js';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/manager/dashboard' element={<ManagerDashboard />} />
          <Route path='/employee/dashboard' element={<EmployeeDashboard />} />
          <Route path='/user/dashboard' element={<UserDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;