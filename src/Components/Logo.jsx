import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
   <>
        <div className="logo">
            <Link to={'/'}>
            <img src="assets/images/Lenzstore logo.png" className="img-fluid" alt="" />
            </Link>
          </div>
   </>
  )
}

export default Logo