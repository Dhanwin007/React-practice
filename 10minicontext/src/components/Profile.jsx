import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js' 

function Profile() {
    const {user}=useContext(UserContext)
  return (
    <div>Profile:{user?user.username:<h1>User does not exist</h1>}</div>
  )
}


export default Profile