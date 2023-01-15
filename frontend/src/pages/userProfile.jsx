import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Import CSS
import './userProfile.css'

function userProfile() {

  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {

      navigate('/login')

    }

  }, [user, navigate])

  return (
    <>

      <div className="account-container">

        <div className="account-info-item">

          <h1>Your Account Details:</h1>
          <p>

            <b>Name:</b> {user && user.name}
            <br />
            <b>Account Email:</b> {user && user.email}

          </p>


        </div>


        <div className="account-statistics-item">

          <h1>Engagement Statistics:</h1>

        </div>
      </div>

    </>
  )
}

export default userProfile