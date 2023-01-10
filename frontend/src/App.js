import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login';
import Register from './pages/Register';
import User_Profile from './pages/User_Profile'
import Create_Update_Sighting from './pages/Create_Update_Sighting'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<User_Profile />} />
          <Route path='/report' element={<Create_Update_Sighting />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
