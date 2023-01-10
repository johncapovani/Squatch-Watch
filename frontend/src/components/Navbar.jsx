import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Home</Link>
      </div>
      <ul>
        <li>
          <Link to='/report'>
            Report a Sighting
          </Link>
        </li>
        <li>
          <Link to='/login'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            Register
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