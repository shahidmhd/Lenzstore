import React from 'react'
import Products from './Products'
import Productheaders from './Productheaders'
function Productcontainer({data}) {
  return (
    <>
        <Productheaders data={data}/>
      {/*==============================================            product carousel container         ==============================================*/}
      <div className="product-carousel-container mb-70 mb-md-50 mb-sm-30">
        <div className="container wide">
          <div className="row column-four">
            {/*=======  single product  =======*/}
            <Products />
            {/*=======  End of single product  =======*/}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mb-25 mt-30 mt-sm-20">
              <a className="lezada-loadmore-button" href="#">
                <i className="ion-ios-plus-empty" /> LOAD MORE ...
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of product carousel container  ======*/}

    </>
  )
}

export default Productcontainer