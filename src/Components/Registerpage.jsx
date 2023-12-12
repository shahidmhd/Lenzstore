import React from 'react'
import { Link } from 'react-router-dom'

function Registerpage() {
  return (
    <>
      {/*                 */}
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
             <div className="container">
               <div className="row">
                 <div className="col-lg-12">
                   <h1 className="breadcrumb-title">Create Account</h1>
                   {/*=======  breadcrumb list  =======*/}
                   <ul className="breadcrumb-list">
                     <li className="breadcrumb-list__item">
                       <a href="index.html">HOME</a>
                     </li>
                     <li className="breadcrumb-list__item breadcrumb-list__item--active">
                       customer Register
                     </li>
                   </ul>
                   {/*=======  End of breadcrumb list  =======*/}
                 </div>
               </div>
             </div>
           </div>

           {/* fghfhfghfgh end */}
<div className="login-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mb-md-50 mb-sm-50">
        <div className="lezada-form login-form">
          <form action="#">
            <div className="row">
              <div className="col-lg-12">
                {/*=======  login title  =======*/}
                <div className="section-title section-title--login text-center mb-50">
                  <h2 className="mb-20">Register</h2>
                  <p>Great to have you back!</p>
                </div>
                {/*=======  End of login title  =======*/}
              </div>
              <div className="col-lg-6 mb-60">
                <input
                  type="text"
                  placeholder="Username"
                  required=""
                />
              </div>
              <div className="col-lg-6 mb-60">
                <input
                  type="text"
                  placeholder="email address"
                  required=""
                />
              </div>
              <div className="col-lg-6 mb-60">
                <input
                  type="text"
                  placeholder="address"
                  required=""
                />
              </div>
              <div className="col-lg-6 mb-60">
                <input
                  type="text"
                  placeholder="phone"
                  required=""
                />
              </div>
              <div className="col-lg-6 mb-60">
                <input type="password" placeholder="Password" required="" />
              </div>
              <div className="col-lg-6 mb-60">
                <input type="password" placeholder="conform Password" required="" />
              </div>

              <div className="col-lg-12 text-center mb-30">
                <button className="lezada-button lezada-button--medium">
                  submit
                </button>
              </div>
              <div className="col-lg-12">
                <input type="checkbox" />{" "}
                <span className="remember-text">Remember me</span>
                <Link to={'/login'} className="reset-pass-link">Already have an account? Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Registerpage