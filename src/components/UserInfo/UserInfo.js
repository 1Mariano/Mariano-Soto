import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

export default function UserInfo() {
    const {auth, logout} = useAuthContext()
  return (
    <div>
        <p>Bienvenido, {auth.userId}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
