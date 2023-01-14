import React from 'react'
import { Link } from 'react-router-dom'

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
          </Link>
        </li>
        <li>
          <Link className='nav n3' to='/register'>
            Register
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