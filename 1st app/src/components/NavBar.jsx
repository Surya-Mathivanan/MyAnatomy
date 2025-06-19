import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/contact">Contact</Link> */}
        
    </nav>
  )
}

export default NavBar