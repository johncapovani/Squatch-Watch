import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

import React from 'react'


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  //To type in React Form Fields you need to take care of event we must update the state
  // Setting form data to one object. We are updating state using the setFormData function
  //The previous state is the object from the useState function above
  //Then we destructure the object 
  const onChange = (e) => {

    setFormData((prevState) => ({
//We get all of the fields by using the spread operator
      ...prevState,
      //To get the Key we use e.target.name and the value e.target.value
      [e.target.name]: e.target.value,


    }))

  }

  const onSubmit = (e) => {

    e.preventDefault()

  }

  return (
    <>

      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to interact with Squatch-Watch!</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
       
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>

    </>
  )
}

export default Login