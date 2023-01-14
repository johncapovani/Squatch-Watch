import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'


function Navbar() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Home</Link>
      </div>
      <ul className='list'>
        <li>
          <Link to='/report'>
            Report a Sighting
          </Link>
        </li>
        <li>
          <Link to='/login'>
            Login
            <FaSignInAlt />
          </Link>
        </li>
        <li>
          <Link to='/register'>
            Register
            <FaUser />
          </Link>
        </li>
        <li>
          <Link to='/account'>
            My Account
          </Link>
        </li>

      </ul>
    </header>
  )
}

export default Navbar