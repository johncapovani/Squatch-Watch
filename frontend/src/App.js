import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login';
import Register from './pages/Register';
import User_Profile from './pages/User_Profile'
import createUpdateSighting from './pages/createUpdateSighting'
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
            <Route path='/account' element={<User_Profile />} />
            <Route path='/report' element={<createUpdateSighting />} />

          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer/>
      </>
      );
}

      export default App;
