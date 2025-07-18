import React from 'react'
import {Link,NavLink} from "react-router";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" className={({isActive}) => isActive ? "bg-green-600 text-5xl" :""}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "bg-green-600 text-5xl" :""}>About</NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive ? "bg-green-600 text-5xl" :""}>Contacts</NavLink>
      <NavLink to="/NotFound" className={({isActive}) => isActive ? "bg-green-600 text-5xl" :""}>NotFound</NavLink>
    </div>
  )
}

export default Navbar
