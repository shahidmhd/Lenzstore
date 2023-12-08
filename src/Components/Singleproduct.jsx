import React, { useState } from 'react'
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import image7 from '/assets/images/products/product7.jpg'
import image8 from '/assets/images/products/product8.jpg'
import image9 from '/assets/images/products/product9.jpg'
import image10 from '/assets/images/products/product10.jpg'
const CustomPrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
    </button>
  );
  
  const CustomNextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next">
    </button>
  );
function Singleproduct() {
    const [selectedImage, setSelectedImage] = useState('assets/images/products/glass1.jpg');

    const imageList = [
     image7,
     image8,
     image9,
     image10
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };
    const buttonStyle = {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        padding: 0,
        margin: 0,
        outline: 'none',
      };
    
  
  return (
   <>


  <div className="shop-page-wrapper mt-100 mb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=======  shop product content  =======*/}
          <div className="shop-product">
            <div className="row pb-100">
              <div className="col-lg-6 mb-md-70 mb-sm-70">
                {/*=======  shop product big image gallery  =======*/}
                <div className="shop-product__big-image-gallery-wrapper mb-30">
                  {/*=======  shop product gallery icons  =======*/}
                  <div className="single-product__floating-badges single-product__floating-badges--shop-product">
                    <span className="hot">hot</span>
                  </div>
                  <div className="shop-product-rightside-icons">
                    <span className="wishlist-icon">
                      <a
                        href="#"
                        data-tippy="Add to wishlist"
                        data-tippy-placement="left"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay={50}
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      >
                        <i className="ion-android-favorite-outline" />
                      </a>
                    </span>
                    <span className="enlarge-icon">
                      <a
                        className="btn-zoom-popup"
                        href="#"
                        data-tippy="Click to enlarge"
                        data-tippy-placement="left"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay={50}
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      >
                        <i className="ion-android-expand" />
                      </a>
                    </span>
                  </div>
                  {/*=======  End of shop product gallery icons  =======*/}
                  <div className="shop-product__big-image-gallery-slider">
                  <Slider {...settings}>
                        {imageList.map((image, index) => (
                          <div key={index}>
                            <Zoom
                              overlayBgColorEnd="rgba(0, 0, 0, 0.7)"
                              zoomMargin={40}
                            >
                              <img
                                src={image}
                                alt={`Product Image ${index}`}
                                className="img-fluid hover-zoom"
                                onClick={() => setSelectedImage(image)}
                              />
                            </Zoom>
                          </div>
                        ))}
                      </Slider>
                    </div>
                </div>
                {/*=======  End of shop product big image gallery  =======*/}
                {/*=======  shop product small image gallery  =======*/}
                {/*=======  End of shop product small image gallery  =======*/}
              </div>
              {/*side bar oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo  */}
              <div className="col-lg-6">
                {/*=======  shop product description  =======*/}
                <div className="shop-product__description">
                  {/*=======  shop product navigation  =======*/}
                  <div className="shop-product__navigation">
                    <a href="shop-product-basic.html">
                      <i className="ion-ios-arrow-thin-left" />
                    </a>
                    <a href="shop-product-basic.html">
                      <i className="ion-ios-arrow-thin-right" />
                    </a>
                  </div>
                  {/*=======  End of shop product navigation  =======*/}
                  {/*=======  shop product rating  =======*/}
                  <div className="shop-product__rating mb-15">
                    <span className="product-rating">
                      <i className="active ion-android-star" />
                      <i className="active ion-android-star" />
                      <i className="active ion-android-star" />
                      <i className="active ion-android-star" />
                      <i className="ion-android-star-outline" />
                    </span>
                    <span className="review-link ml-20">
                      <a href="#">(3 customer reviews)</a>
                    </span>
                  </div>
                  {/*=======  End of shop product rating  =======*/}
                  {/*=======  shop product title  =======*/}
                  <div className="shop-product__title mb-15">
                    <h2>High waist trousers</h2>
                  </div>
                  {/*=======  End of shop product title  =======*/}
                  {/*=======  shop product price  =======*/}
                  <div className="shop-product__price mb-30">
                    <span className="main-price discounted">₹160.00</span>
                    <span className="discounted-price">₹180.00</span>
                  </div>
                  {/*=======  End of shop product price  =======*/}
                  {/*=======  shop product short description  =======*/}
                  <div className="shop-product__short-desc mb-50">
                    Hurley Dry-Fit Chino Short. Men's chino short. Outseam
                    Length: 19 Dri-FIT Technology helps keep you dry and
                    comfortable. Made with sweat-wicking fabric. Fitted waist
                    with belt loops. Button waist with zip fly provides a
                    classic look and feel . Back welt pockets and coin pocket
                    for storage. Dual side seam pockets. Heat transferred logos.
                    70% nylon 24% polyester 6% spandex. Imported.
                  </div>
                  {/*=======  End of shop product short description  =======*/}
                  {/*=======  shop product size block  =======*/}
                  <div className="shop-product__block shop-product__block--size mb-20">
                    <div className="shop-product__block__title">Size: </div>
                    <div className="shop-product__block__value">
                      <div className="shop-product-size-list">
                        <span className="single-size">L</span>
                        <span className="single-size">M</span>
                        <span className="single-size">S</span>
                        <span className="single-size">XS</span>
                      </div>
                    </div>
                  </div>
                  {/*=======  End of shop product size block  =======*/}
                  {/*=======  shop product color block  =======*/}
                  <div className="shop-product__block shop-product__block--color mb-20">
                    <div className="shop-product__block__title">Color: </div>
                    <div className="shop-product__block__value">
                      <div className="shop-product-color-list">
                        <ul className="single-filter-widget--list single-filter-widget--list--color">
                          <li className="mb-0 pt-0 pb-0 mr-10">
                            <a className="active" href="#">
                              <span className="color-picker black" />
                            </a>
                          </li>
                          <li className="mb-0 pt-0 pb-0 mr-10">
                            <a href="#">
                              <span className="color-picker blue" />
                            </a>
                          </li>
                          <li className="mb-0 pt-0 pb-0 mr-10">
                            <a href="#">
                              <span className="color-picker brown" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*=======  End of shop product color block  =======*/}
                  {/*=======  shop product quantity block  =======*/}
                  <div className="shop-product__block shop-product__block--quantity mb-40">
                    <div className="shop-product__block__title">Quantity: </div>
                    <div className="shop-product__block__value">
                    <div className="pro-qty d-inline-block mx-0 pt-0">
                        <button style={buttonStyle}>
                      -
                        </button>
                        <input type="text" value={1} readOnly />
                        <button style={buttonStyle}>
                         +
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*=======  End of shop product quantity block  =======*/}
                  {/*=======  shop product buttons  =======*/}
                  <div className="shop-product__buttons mb-40">
                    <a className="lezada-button lezada-button--medium" href="#">
                      add to cart
                    </a>
                    <a className="lezada-button lezada-button--medium ml-20" href="#">
                      Buy Now
                    </a>
                  </div>
                </div>
                {/*=======  End of shop product description  =======*/}
              </div>
              {/*8888888888888888888888888888888888888888888  */}
            </div>
            {/* bottom================================================== */}
            <div className="row">
              <div className="col-lg-12">
                {/*=======  shop product description tab  =======*/}
                <div className="shop-product__description-tab pt-100">
                  {/*=======  tab navigation  =======*/}
                  <div className="tab-product-navigation tab-product-navigation--product-desc mb-50">
                    <div
                      className="nav nav-tabs justify-content-center"
                      id="nav-tab2"
                      role="tablist"
                    >
                      <a
                        className="nav-item nav-link active"
                        id="product-tab-1"
                        data-bs-toggle="tab"
                        href="#product-series-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Description
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="product-tab-2"
                        data-bs-toggle="tab"
                        href="#product-series-2"
                        role="tab"
                        aria-selected="false"
                      >
                        Additional information
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="product-tab-3"
                        data-bs-toggle="tab"
                        href="#product-series-3"
                        role="tab"
                        aria-selected="false"
                      >
                        Reviews (3)
                      </a>
                    </div>
                  </div>
                  {/*=======  End of tab navigation  =======*/}
                  {/*=======  tab content  =======*/}
                  <div className="tab-content" id="nav-tabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="product-series-1"
                      role="tabpanel"
                      aria-labelledby="product-tab-1"
                    >
                      {/*=======  shop product long description  =======*/}
                      <div className="shop-product__long-desc mb-30">
                        <p>
                          Hurley Dry-Fit Chino Short. Men’s chino short. Outseam
                          Length: 19 Dri-FIT Technology helps keep you dry and
                          comfortable. Made with sweat-wicking fabric. Fitted
                          waist with belt loops. Button waist with zip fly
                          provides a classic look and feel . Back welt pockets
                          and coin pocket for storage. Dual side seam pockets.
                          Heat transferred logos. 70% nylon 24% polyester 6%
                          spandex. Imported.
                        </p>
                      </div>
                      {/*=======  End of shop product long description  =======*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-series-2"
                      role="tabpanel"
                      aria-labelledby="product-tab-2"
                    >
                      {/*=======  shop product additional information  =======*/}
                      <div className="shop-product__additional-info">
                        <table className="shop-attributes">
                          <tbody>
                            <tr>
                              <th>Size</th>
                              <td>
                                <p>L, M, S, XS</p>
                              </td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td>
                                <p>Black, Blue, Brown</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/*=======  End of shop product additional information  =======*/}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-series-3"
                      role="tabpanel"
                      aria-labelledby="product-tab-3"
                    >
                      {/*=======  shop product reviews  =======*/}
                      <div className="shop-product__review">
                        <h2 className="review-title mb-20">
                          3 reviews for High-waist Trousers
                        </h2>
                        {/*=======  single review  =======*/}
                        <div className="single-review">
                          <div className="single-review__image">
                            <img
                              src="assets/images/user/user1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-review__content">
                            {/*=======  rating  =======*/}
                            <div className="shop-product__rating">
                              <span className="product-rating">
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="ion-android-star-outline" />
                              </span>
                            </div>
                            {/*=======  End of rating  =======*/}
                            {/*=======  username and date  =======*/}
                            <p className="username">
                              Scott James{" "}
                              <span className="date">/ April 5, 2022</span>
                            </p>
                            {/*=======  End of username and date  =======*/}
                            {/*=======  message  =======*/}
                            <p className="message">
                              Thanks for always keeping your HTML themes up to
                              date. Your level of support and dedication is
                              second to none.
                            </p>
                            {/*=======  End of message  =======*/}
                          </div>
                        </div>
                        {/*=======  End of single review  =======*/}
                        {/*=======  single review  =======*/}
                        <div className="single-review">
                          <div className="single-review__image">
                            <img
                              src="assets/images/user/user2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-review__content">
                            {/*=======  rating  =======*/}
                            <div className="shop-product__rating">
                              <span className="product-rating">
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="ion-android-star-outline" />
                              </span>
                            </div>
                            {/*=======  End of rating  =======*/}
                            {/*=======  username and date  =======*/}
                            <p className="username">
                              Owen Christ{" "}
                              <span className="date">/ April 7, 2022</span>
                            </p>
                            {/*=======  End of username and date  =======*/}
                            {/*=======  message  =======*/}
                            <p className="message">
                              I didn’t expect this poster to arrive folded. Now
                              there are lines on the poster and one sad Ninja.
                            </p>
                            {/*=======  End of message  =======*/}
                          </div>
                        </div>
                        {/*=======  End of single review  =======*/}
                        {/*=======  single review  =======*/}
                        <div className="single-review">
                          <div className="single-review__image">
                            <img
                              src="assets/images/user/user3.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="single-review__content">
                            {/*=======  rating  =======*/}
                            <div className="shop-product__rating">
                              <span className="product-rating">
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="active ion-android-star" />
                                <i className="ion-android-star-outline" />
                              </span>
                            </div>
                            {/*=======  End of rating  =======*/}
                            {/*=======  username and date  =======*/}
                            <p className="username">
                              Edna Watson{" "}
                              <span className="date">/ April 5, 2022</span>
                            </p>
                            {/*=======  End of username and date  =======*/}
                            {/*=======  message  =======*/}
                            <p className="message">
                              Can’t wait to start mixin’ with this one!
                              Irba-irr-Up-up-up-up-date your theme!
                            </p>
                            {/*=======  End of message  =======*/}
                          </div>
                        </div>
                        {/*=======  End of single review  =======*/}
                        <h2 className="review-title mb-20">Add a review</h2>
                        <p className="text-center">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        {/*=======  review form  =======*/}
                        <div className="lezada-form lezada-form--review">
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-6 mb-20">
                                <input
                                  type="text"
                                  placeholder="Name *"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-6 mb-20">
                                <input
                                  type="email"
                                  placeholder="Email *"
                                  required=""
                                />
                              </div>
                              <div className="col-lg-12 mb-20">
                                <span className="rating-title mr-30">
                                  YOUR RATING
                                </span>
                                <span className="product-rating">
                                  <i className="active ion-android-star-outline" />
                                  <i className="active ion-android-star-outline" />
                                  <i className="active ion-android-star-outline" />
                                  <i className="active ion-android-star-outline" />
                                  <i className="active ion-android-star-outline" />
                                </span>
                              </div>
                              <div className="col-lg-12 mb-20">
                                <textarea
                                  cols={30}
                                  rows={10}
                                  placeholder="Your review *"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-lg-12 text-center">
                                <button
                                  type="submit"
                                  className="lezada-button lezada-button--medium"
                                >
                                  submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/*=======  End of review form  =======*/}
                      </div>
                      {/*=======  End of shop product reviews  =======*/}
                    </div>
                  </div>
                  {/*=======  End of tab content  =======*/}
                </div>
                {/*=======  End of shop product description tab  =======*/}
              </div>
            </div>
            {/* ---------------------------------------------------------------- */}
          </div>
          {/*=======  End of shop product content  =======*/}
        </div>
      </div>
    </div>
  </div>
  {/*=====  End of shop page content  ======*/}
</>

  
  )
}

export default Singleproduct

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import ReactImageZoom from 'react-image-zoom';

// function Singleproduct() {
//   const [selectedImage, setSelectedImage] = useState('assets/images/shop-product/soccer-1.png');

//   const imageList = [
//     'assets/images/shop-product/soccer-1.png',
//     'assets/images/shop-product/soccer-2.png',
//     'assets/images/shop-product/soccer-3.png',
//     'assets/images/shop-product/soccer-4.jpg',
//     'assets/images/shop-product/soccer-5.png',
//     'assets/images/shop-product/trendcoat-1.jpg',
//     'assets/images/shop-product/trendcoat-2.jpg',
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <div className="shop-page-wrapper mt-100 mb-100">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="shop-product">
//                 <div className="row pb-100">
//                   <div className="col-lg-6 mb-md-70 mb-sm-70">
//                     <div className="shop-product__big-image-gallery-wrapper mb-30">
//                       <Slider {...settings}>
//                         {imageList.map((image, index) => (
//                           <div key={index}>
//                             <ReactImageZoom
//                               {...{
//                                 width: 400,
//                                 height: 400,
//                                 zoomWidth: 500,
//                                 img: image,
//                                 zoomPosition: 'original',
//                               }}
//                             />
//                           </div>
//                         ))}
//                       </Slider>
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     {/* Your other content here */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Singleproduct;
