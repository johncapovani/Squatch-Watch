import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile.jsx'
import CreateUpdateSighting from './pages/CreateUpdateSighting.jsx'
import UpdateSighting from './pages/UpdateSighting.jsx'
import Home from './pages/Home';




function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account' element={<UserProfile />} />
            <Route path='/report' element={<CreateUpdateSighting />} />
            <Route path='/update' element={<UpdateSighting />} />

          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
