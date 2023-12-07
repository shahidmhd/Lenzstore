import React from 'react'

function FooterTop() {
  return (
    <>
    {/*=============================================
      =            footer top         =
      =============================================*/}
    <div className="footer-top mb-50 mb-md-80 mb-sm-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*=======  footer top container  =======*/}
            <div className="footer-top-container">
              {/*=======  single footer top widget  =======*/}
              <div className="footer-top-single-widget">
                <h4 className="footer-top-widget-title">FREE SHIPPING</h4>
                <div className="content">
                  <p>On all orders over $75.00</p>
                </div>
              </div>
              <div className="footer-top-single-widget">
                <h4 className="footer-top-widget-title">FREE RETURNS</h4>
                <div className="content">
                  <p>30 days money back guarantee</p>
                </div>
              </div>
              <div className="footer-top-single-widget">
                <h4 className="footer-top-widget-title">SECURE PAYMENT</h4>
                <div className="content">
                  <img
                    src="assets/images/icons/pay.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              {/*=======  End of single footer top widget  =======*/}
            </div>
            {/*=======  End of footer top container  =======*/}
          </div>
        </div>
      </div>
    </div>
    {/*=====  End of footer top  ======*/}
  </>
  )
}

export default FooterTop