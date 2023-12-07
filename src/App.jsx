import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Notfoundpage from "./Components/Notfoundpage";
import Login from "./Pages/Login";
import Productlist from "./Pages/Productlist";
import Singleproductpage from "./Pages/Singleproductpage";
function App() {
  return (
    <>
    <Router>
    <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Header />
      </div>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/cart" element={<Cart/>} />
       <Route path="/wishlist" element={<Wishlist/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/shop" element={<Productlist/>} />
       <Route path="/singlepage" element={<Singleproductpage/>} />
       <Route path="*" element={<Notfoundpage />} />
        </Routes>
      <Footer />

        {/*==============================================            overlay items         ==============================================*/}
        {/*=======  about overlay  =======*/}
        <div className="header-offcanvas about-overlay" id="about-overlay">
          <div className="overlay-close inactive" />
          <div className="overlay-content">
            {/*=======  close icon  =======*/}
            <span className="close-icon" id="about-close-icon">
              <a href="#">
                <i className="ti-close" />
              </a>
            </span>
            {/*=======  End of close icon  =======*/}
            {/*=======  overlay content container  =======*/}
            <div className="overlay-content-container d-flex flex-column justify-content-between h-100">
              {/*=======  widget wrapper  =======*/}
              <div className="widget-wrapper">
                {/*=======  single widget  =======*/}
                <div className="single-widget">
                  <h2 className="widget-title">About Us</h2>
                  <p>
                    At Lezada, we put a strong emphasis on simplicity, quality
                    and usefulness of fashion products over other factors. Our
                    fashion items never get outdated. They are not short-lived
                    as normal fashion clothes.
                  </p>
                </div>
                {/*=======  End of single widget  =======*/}
              </div>
              {/*=======  End of widget wrapper  =======*/}
              {/*=======  contact widget  =======*/}
              <div className="contact-widget">
                <p className="email">
                  <a href="mailto:contact@lezada.com">contact@lezada.com</a>
                </p>
                <p className="phone">(+00) 123 567990</p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a
                        href="http://www.twitter.com/"
                        data-tippy="Twitter"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay={50}
                        data-tippy-arrow="true"
                        target="_blank"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.facebook.com/"
                        data-tippy="Facebook"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay={50}
                        data-tippy-arrow="true"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.instagram.com/"
                        data-tippy="Instagram"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay={50}
                        data-tippy-arrow="true"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.youtube.com/"
                        data-tippy="Youtube"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay={50}
                        data-tippy-arrow="true"
                        target="_blank"
                      >
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*=======  End of contact widget  =======*/}
            </div>
            {/*=======  End of overlay content container  =======*/}
          </div>
        </div>
        {/*=======  End of about overlay  =======*/}

        {/*=======  wishlist overlay  =======*/}
        <div className="wishlist-overlay" id="wishlist-overlay">
          <div className="wishlist-overlay-close inactive" />
          <div className="wishlist-overlay-content">
            {/*=======  close icon  =======*/}
            <span className="close-icon" id="wishlist-close-icon">
              <a href="#">
                <i className="ion-android-close" />
              </a>
            </span>
            {/*=======  End of close icon  =======*/}
            {/*=======  offcanvas wishlist content container  =======*/}
            <div className="offcanvas-cart-content-container">
              <h3 className="cart-title">Wishlist</h3>
              <div className="cart-product-wrapper">
                <div className="cart-product-container  ps-scroll">
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Dark Brown Leather Watch
                        </a>
                      </h5>
                      <p>
                        <span className="main-price discounted">$200.00</span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">Dining Chair</a>
                      </h5>
                      <p>
                        <span className="main-price discounted">$300.00</span>{" "}
                        <span className="discounted-price">$220.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Creative Wooden Stand
                        </a>
                      </h5>
                      <p>
                        <span className="main-price discounted">$100.00</span>{" "}
                        <span className="discounted-price">$80.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Dark Brown Leather Watch
                        </a>
                      </h5>
                      <p>
                        <span className="main-price discounted">$200.00</span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Creative Wooden Stand
                        </a>
                      </h5>
                      <p>
                        <span className="main-price discounted">$200.00</span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                </div>
                {/*=======  cart buttons  =======*/}
                <div className="cart-buttons">
                  <a href="shop-wishlist.html">view wishlist</a>
                </div>
                {/*=======  End of cart buttons  =======*/}
              </div>
            </div>
            {/*=======  End of offcanvas wishlist content container   =======*/}
          </div>
        </div>
        {/*=======  End of wishlist overlay  =======*/}
    
  
        {/*=======  cart overlay  =======*/}
        <div className="cart-overlay" id="cart-overlay">
          <div className="cart-overlay-close inactive" />
          <div className="cart-overlay-content">
            {/*=======  close icon  =======*/}
            <span className="close-icon" id="cart-close-icon">
              <a href="#">
                <i className="ion-android-close" />
              </a>
            </span>
            {/*=======  End of close icon  =======*/}
            {/*=======  offcanvas cart content container  =======*/}
            <div className="offcanvas-cart-content-container">
              <h3 className="cart-title">Cart</h3>
              <div className="cart-product-wrapper">
                <div className="cart-product-container  ps-scroll">
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Dark Brown Leather Watch
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">Dining Chair</a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$220.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Creative Wooden Stand
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$80.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Dark Brown Leather Watch
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Creative Wooden Stand
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                </div>
                {/*=======  subtotal calculation  =======*/}
                <p className="cart-subtotal">
                  <span className="subtotal-title">Subtotal:</span>
                  <span className="subtotal-amount">$200.00</span>
                </p>
                {/*=======  End of subtotal calculation  =======*/}
                {/*=======  cart buttons  =======*/}
                <div className="cart-buttons">
                  <a href="shop-cart.html">view cart</a>
                  <a href="shop-checkout.html">checkout</a>
                </div>
                {/*=======  End of cart buttons  =======*/}
                {/*=======  free shipping text  =======*/}
                <p className="free-shipping-text">
                  Free Shipping on All Orders Over $100!
                </p>
                {/*=======  End of free shipping text  =======*/}
              </div>
            </div>
            {/*=======  End of offcanvas cart content container   =======*/}
          </div>
        </div>
        {/*=======  End of cart overlay  =======*/}
    
    
        {/*=======  search overlay  =======*/}
        <div className="search-overlay" id="search-overlay">
          {/*=======  close icon  =======*/}
          <span className="close-icon search-close-icon">
            <a href="#" id="search-close-icon">
              <i className="ti-close" />
            </a>
          </span>
          {/*=======  End of close icon  =======*/}
          {/*=======  search overlay content  =======*/}
          <div className="search-overlay-content">
            <div className="input-box">
              <form action="https://htmldemo.net/lezada/lezada/index.html">
                <input type="search" placeholder="Search Products..." />
              </form>
            </div>
            <div className="search-hint">
              <span># Hit enter to search or ESC to close</span>
            </div>
          </div>
          {/*=======  End of search overlay content  =======*/}
        </div>
        {/*=======  End of search overlay  =======*/}
        </Router>
      </>
    
  );
}

export default App;
