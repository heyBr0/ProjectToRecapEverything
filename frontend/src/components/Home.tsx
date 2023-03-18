import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <h3>Navigation:</h3>
        <div>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    </div>
  )
}

export default Home