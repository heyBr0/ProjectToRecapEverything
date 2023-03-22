import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <h3>Navigation:</h3>
        <div className='NavLinks'>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/reducer">Reducer</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/images">Images Fetch</NavLink>
            <NavLink to="/fetchquery">Fetch Query</NavLink>
            <NavLink to="/jsprep">JSprep</NavLink>
        </div>
    </div>
  )
}

export default Home