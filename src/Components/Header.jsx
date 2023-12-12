import React, { useEffect, useState } from "react";
import Topheader from "./Topheader";
import Logo from "./Logo";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
function Header() {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header className="header header-wide-topbar header-sticky">
         {isTop && <Topheader />}
        {/*=======  header bottom  =======*/}
        <div className="header-bottom pt-md-40 pb-md-40 pt-sm-40 pb-sm-40"style={{backgroundColor:"#2257a7"}}>
          <div className="container wide">
            {/*=======  header bottom container  =======*/}
            <div className="header-bottom-container">
              {/*=======  logo with off canvas  =======*/}
              <div className="logo-with-offcanvas d-flex">
                {/*=======  logo   =======*/}
                <Logo />
                {/*=======  End of logo   =======*/}
              </div>
              {/*=======  End of logo with off canvas  =======*/}
              {/*=======  header bottom navigation  =======*/}
              <div className="header-bottom-navigation">
                <div className="site-main-nav d-none d-lg-block">
                  <nav className="site-nav center-menu">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="#">EYEGLASSES</a>
                        <ul className="sub-menu single-column-menu">
                          <li>
                          <Link to={'/shop'}>Men</Link>
                          </li>
                          <li>
                            <Link to={'/shop'}>Women</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Unisex</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Kids</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">SUNGLASSES</a>
                        <ul className="sub-menu single-column-menu">
                        <li>
                          <Link to={'/shop'}>Men</Link>
                          </li>
                          <li>
                            <Link to={'/shop'}>Women</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Unisex</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Kids</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">COMPUTER GLASSES</a>
                        <ul className="sub-menu single-column-menu">
                        <li>
                          <Link to={'/shop'}>Men</Link>
                          </li>
                          <li>
                            <Link to={'/shop'}>Women</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Unisex</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Kids</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">NEW ARRIVAL</a>
                        <ul className="sub-menu single-column-menu">
                        <li>
                          <Link to={'/shop'}>Men</Link>
                          </li>
                          <li>
                            <Link to={'/shop'}>Women</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Unisex</Link>
                          </li>
                          <li>
                          <Link to={'/shop'}>Kids</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/*=======  End of header bottom navigation  =======*/}
              {/*=======  headeer right container  =======*/}
              <div className="header-right-container">
                {/*=======  header right icons  =======*/}
                <div className="header-right-icons d-flex justify-content-end align-items-center h-100">
                  {/*=======  single-icon  =======*/}
                  <div className="single-icon search">
        <a href="#" id="search-icon" onClick={openSearch}>
          <i className="ion-ios-search-strong" style={{ color: '#fff' }} />
        </a>
      </div>
      {isSearchOpen && (
        <div className="search-popup pl-5">
          <div className="search-popup-content">
            <form>
              <input type="text" placeholder="Search..." style={{borderRadius:'5em',paddingLeft:'1em',border:'1em'}}/>
            </form>
          </div>
        </div>
      )}
                  {/*=======  End of single-icon  =======*/}
                  {/*=======  single-icon  =======*/}
                  <div className=" single-icon user-login">
                    {/* <a href="#">
                      <i className="ion-android-person" style={{color:"#fff"}}/>
                    </a> */}
                    <Link to={'/profile'}>
                    <i className="ion-android-person" style={{color:"#fff"}}/>
                    </Link>
                  </div>

                  {/*=======  End of single-icon  =======*/}
                  {/*=======  single-icon  =======*/}
                  <div className="single-icon wishlist">
                    <Link to={'/wishlist'}id="offcanvas-wishlist-icon">
                    <i className="ion-android-favorite-outline"style={{color:"#fff"}} />
                      <span className="count">2</span>
                    </Link>
                  </div>
                  {/*=======  End of single-icon  =======*/}
                  {/*=======  single-icon  =======*/}
                  <div className="single-icon cart">
                    <Link to={'/cart'} id="offcanvas-cart-icon">
                      <i className="ion-ios-cart" style={{color:"#fff"}} />
                      <span className="count">3</span>
                    </Link>
                  </div>
                  {/*=======  End of single-icon  =======*/}
                </div>
                {/*=======  End of header right icons  =======*/}
              </div>
              {/*=======  End of headeer right container  =======*/}
            </div>
            {/*=======  End of header bottom container  =======*/}
            {/* Mobile Navigation Start Here */}
            <div className="site-mobile-navigation d-block d-lg-none">
              <div id="dl-menu" className="dl-menuwrapper site-mobile-nav">
                {/*Site Mobile Menu Toggle Start*/}
                {/* <button
                  className="dl-trigger hamburger hamburger--spin"
                  onClick={toggleDrawer}  
                >
                  <span className="hamburger-box"style={{ width: '10px', height: '10px' }}>
                    <span className="hamburger-inner" />
                  </span>
                </button> */}
                {/* <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction="right"
                  className="bla bla bla"
                  zIndex={1000}
                >
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="#">EYEGLASSES</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                          <a href="about-us.html">Men</a>
                        </li>
                        <li>
                          <a href="about-us-2.html">Women</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Unisex</a>
                        </li>
                        <li>
                          <a href="faq.html">Kids</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">SUNGLASSES</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                          <a href="about-us.html">Men</a>
                        </li>
                        <li>
                          <a href="about-us-2.html">Women</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Unisex</a>
                        </li>
                        <li>
                          <a href="faq.html">Kids</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">COMPUTER GLASSES</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                          <a href="about-us.html">Men</a>
                        </li>
                        <li>
                          <a href="about-us-2.html">Women</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Unisex</a>
                        </li>
                        <li>
                          <a href="faq.html">Kids</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">NEW ARRIVAL</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                          <a href="about-us.html">Men</a>
                        </li>
                        <li>
                          <a href="about-us-2.html">Women</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Unisex</a>
                        </li>
                        <li>
                          <a href="faq.html">Kids</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Drawer> */}
              </div>
            </div>
            {/* Mobile Navigation End Here */}
          </div>
        </div>
        {/*=======  End of header bottom  =======*/}
      </header>
      
    </>
  );
}

export default Header;
