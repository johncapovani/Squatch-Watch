import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function User_Profile() {

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

useEffect(()=> {

  if(!user){

    navigate('/login')

  }

},[user, navigate])

  return (
    <div className='account'>Your Account Details:</div>
  )
}

export default User_Profile