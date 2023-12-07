import React from 'react'

function Topheader() {
  return (
    <>
    {/*=======  header top  =======*/}
  <div className="header-top pt-10 pb-10">
    <div className="container wide">
      {/*=======  header top container  =======*/}
      <div className="header-top-container">
        {/*=======  header top left  =======*/}
        <div className="header-top-left">
          {/*=======  language change =======*/}
          <div className="language-change change-dropdown d-none d-lg-block">
            <a href="#">English</a>
            <ul>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Deustch</a>
              </li>
            </ul>
          </div>
          {/*=======  End of language change =======*/}
          {/*=======  header separator  =======*/}
          <span className="header-separator d-none d-lg-block">|</span>
          {/*=======  End of header separator  =======*/}
          {/*=======  currency change =======*/}
          <div className="currency-change change-dropdown d-none d-lg-block">
            <a href="#">USD</a>
            <ul>
              <li>
                <a href="#">EURO</a>
              </li>
              <li>
                <a href="#">GBP</a>
              </li>
            </ul>
          </div>
          {/*=======  End of currency change =======*/}
          {/*=======  header separator  =======*/}
          <span className="header-separator d-none d-lg-block">|</span>
          {/*=======  End of header separator  =======*/}
          {/*=======  order online text  =======*/}
          <div className="order-online-text">
            Order Online Call Us{" "}
            <a href="#">
              <span className="number">+91 1122334455</span>
            </a>
          </div>
          {/*=======  End of order online text  =======*/}
        </div>
        {/*=======  End of header top left  =======*/}
        {/*=======  header top right  =======*/}
        <div className="header-top-right">
          {/*=======  top shop sropdown =======*/}
          <div className="top-shop-dropdown change-dropdown">
            <a href="#">Purchase Now</a>
            <ul>
              <li>
                <a href="#">Shoping Cart</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
            </ul>
          </div>
          {/*=======  End of top shop dropdown =======*/}
          {/*=======  header separator  =======*/}
          <span className="header-separator">|</span>
          {/*=======  End of header separator  =======*/}
          {/*======= top newsletter subscription   =======*/}
          <div className="top-newsletter-subscription no-dropdown">
            <a href="#">Newsletter Signup</a>
          </div>
          {/*=======  End of top newsletter subscription   =======*/}
          {/*=======  header separator  =======*/}
          <span className="header-separator">|</span>
          {/*=======  End of header separator  =======*/}
          {/*=======  top social icons  =======*/}
          <div className="top-social-icons">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play" />
                </a>
              </li>
            </ul>
          </div>
          {/*=======  End of top social icons  =======*/}
        </div>
        {/*=======  End of header top right  =======*/}
      </div>
      {/*=======  End of header top container  =======*/}
    </div>
  </div>
  {/*=======  End of header top  =======*/}
    </>
  )
}

export default Topheader