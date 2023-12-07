import React, { useState } from 'react';

function Loginpage() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleMode = () => {
    setIsRegister((prevMode) => !prevMode);
  };

  return (
    <>
      {/*=======  breadcrumb area =======*/}
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
                  customer login
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of breadcrumb area =======*/}
      {/*=============================================
      =            login page content         =
      =============================================*/}

      <div className="login-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  login title  =======*/}
              <div className="section-title section-title--login text-center mb-50">
                <h2 className="mb-20">{isRegister ? 'Register' : 'Login'}</h2>
                <p>
                  {isRegister
                    ? 'Great to have you here!'
                    : 'Great to have you back!'}
                </p>
              </div>
              {/*=======  End of login title  =======*/}
            </div>
            <div className="col-lg-12 mb-md-50 mb-sm-50">
              <div className="lezada-form login-form">
                <form action="#">
                  <div className="row">
                    {/* Email and Password Fields */}
                    {!isRegister && (
                      <>
                        <div className="col-lg-6 mb-60">
                          <input
                            type="text"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 mb-60">
                          <input
                            type="password"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </>
                    )}

                    {/* Additional Fields for Registration */}
                    {isRegister && (
                      <>
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
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 mb-60">
                          <input
                            type="text"
                            placeholder="Enter your address"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 mb-60">
                          <input
                            type="text"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 mb-60">
                          <input
                            type="password"
                            placeholder="password"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 mb-60">
                          <input
                            type="password"
                            placeholder="Confirm password"
                            required=""
                          />
                        </div>
                      </>
                    )}

                    <div className="col-lg-6 text-center mb-30">
                      <button className="lezada-button lezada-button--medium">
                        {isRegister ? 'Register' : 'Login'}
                      </button>
                      <a
                        href="#"
                        className="reset-pass-link"
                        onClick={toggleMode}
                      >
                        {isRegister
                          ? 'Already have an account? Login'
                          : 'Create an account'}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of login content  ======*/}
    </>
  );
}

export default Loginpage;
