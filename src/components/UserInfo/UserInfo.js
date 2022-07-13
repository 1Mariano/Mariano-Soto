import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import "./userInfo.css"

export default function UserInfo() {
    const {auth, logout} = useAuthContext()
  return (
    <div className="user-info">
        <p>Bienvenido, {auth.userId}</p>
        <button className="boton-logout" onClick={logout}>Logout</button>
    </div>
  )
}
