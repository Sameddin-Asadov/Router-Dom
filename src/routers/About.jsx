import React from 'react'
import { Link, Links, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h2>About</h2>

      <div> <Link  to ='employee'>  Employee </Link> </div>
      <div> <Link to='company'>Company</Link>  </div>




      <Outlet/>
    </div>
  )
}

export default About
