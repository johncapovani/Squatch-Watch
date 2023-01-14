import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'


function Navbar() {
  return (
    <header className='header'>
      <div>
        <Link className='logo' to='/'><img src="https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/bigfoot-or-sasquatch-sighting-29688-300x300.png" alt="" /></Link>
      </div>
      <ul className='list'>
        <li>
          <Link className='nav n1' to='/report'>
            Report a Sighting
          </Link>
        </li>
        <li>
          <Link className='nav n2' to='/login'>
            Login
            <FaSignInAlt />
          </Link>
        </li>
        <li>
          <Link className='nav n3' to='/register'>
            Register
            <FaUser />
          </Link>
        </li>
        <li>
          <Link className='nav n4' to='/account'>
            My Account
          </Link>
        </li>

      </ul>
    </header>
  )
}

export default Navbar