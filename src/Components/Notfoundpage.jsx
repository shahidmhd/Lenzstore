import React from 'react'
import { Link } from 'react-router-dom'

function Notfoundpage() {
  return (
    <>
    <div className="nothing-found-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="nothing-found-content">
          <h1>Oops!</h1>
          <h1 className="mb-50">Page not found!</h1>
          <p className="direction-page">
            PLEASE GO BACK TO <Link to={"/"}>homepage</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Notfoundpage