import React from 'react'

function Footer() {
  return (
    <>
    {/*=============================================
      =            footer area         =
      =============================================*/}
    <div className="footer-container footer-one pt-100 pb-50">
      <div className="container wide">
        <div className="row">
          <div className="col footer-single-widget">
            {/*=======  copyright text  =======*/}
            {/*=======  logo  =======*/}
            <div className="logo">
              {/* <img src="assets/images/logo.png" className="img-fluid" alt="" /> */}
              <h3>Lenzstore</h3>
            </div>
            {/*=======  End of logo  =======*/}
            {/*=======  copyright text  =======*/}
            <div className="copyright-text">
              <p>
                {" "}
               @Lenzstore <span>All Rights Reserved</span>
              </p>
            </div>
            {/*=======  End of copyright text  =======*/}
            {/*=======  End of copyright text  =======*/}
          </div>
          <div className="col footer-single-widget">
            {/*=======  single widget  =======*/}
            <h5 className="widget-title">ABOUT</h5>
            {/*=======  footer navigation container  =======*/}
            <div className="footer-nav-container">
              <nav>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Store location</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Orders tracking</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*=======  End of footer navigation container  =======*/}
            {/*=======  single widget  =======*/}
          </div>
          <div className="col footer-single-widget">
            {/*=======  single widget  =======*/}
            <h5 className="widget-title">USEFUL LINKS</h5>
            {/*=======  footer navigation container  =======*/}
            <div className="footer-nav-container">
              <nav>
                <ul>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Support Policy</a>
                  </li>
                  <li>
                    <a href="#">Size guide</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*=======  End of footer navigation container  =======*/}
            {/*=======  single widget  =======*/}
          </div>
          <div className="col footer-single-widget">
            {/*=======  single widget  =======*/}
            <h5 className="widget-title">FOLLOW US ON</h5>
            {/*=======  footer navigation container  =======*/}
            <div className="footer-nav-container footer-social-links">
              <nav>
                <ul>
                  <li>
                    <a href="http://twitter.com/">
                      <i className="fa fa-twitter" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="http://facebook.com/">
                      {" "}
                      <i className="fa fa-facebook" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="http://instagram.com/">
                      <i className="fa fa-instagram" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="http://youtube.com/">
                      {" "}
                      <i className="fa fa-youtube" /> Youtube
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*=======  End of footer navigation container  =======*/}
            {/*=======  single widget  =======*/}
          </div>
          <div className="col footer-single-widget">
            {/*=======  single widget  =======*/}
            <div className="footer-subscription-widget">
              <h2 className="footer-subscription-title">Subscribe.</h2>
              <p className="subscription-subtitle">
                Subscribe to our newsletter to receive news on update.
              </p>
              {/*=======  subscription form  =======*/}
              <div className="subscription-form">
                <form id="mc-form" className="mc-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    required=""
                  />
                  <button type="submit">
                    <i className="ion-ios-arrow-thin-right" />
                  </button>
                </form>
              </div>
              {/*=======  End of subscription form  =======*/}
              {/* mailchimp-alerts Start */}
              <div className="mailchimp-alerts">
                <div className="mailchimp-submitting" />
                {/* mailchimp-submitting end */}
                <div className="mailchimp-success" />
                {/* mailchimp-success end */}
                <div className="mailchimp-error" />
                {/* mailchimp-error end */}
              </div>
              {/* mailchimp-alerts end */}
            </div>
            {/*=======  End of single widget  =======*/}
          </div>
        </div>
      </div>
    </div>
    {/*=====  End of footer area  ======*/}
  </>
  )
}

export default Footer