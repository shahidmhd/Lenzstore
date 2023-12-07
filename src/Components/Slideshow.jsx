import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
function Slideshow() {
    const sliderSettings = {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          { breakpoint: 1501, settings: { slidesToShow: 3 } },
          { breakpoint: 1199, settings: { slidesToShow: 3 } },
          { breakpoint: 991, settings: { slidesToShow: 2, arrows: false } },
          { breakpoint: 767, settings: { slidesToShow: 1, arrows: false } },
          { breakpoint: 575, settings: { slidesToShow: 1, arrows: false } },
          { breakpoint: 479, settings: { slidesToShow: 1, arrows: false } },
        ],
      };
      
    
      const categories = [
        { image: image7, title: 'Sunglasses', count: 8 },
        { image:image8, title: 'Eyeglass', count: 6 },
        { image:image9, title: 'Kids', count: 10 },
        { image: image10, title: 'Men', count: 12 },
      ];
  return (
   <>
    <div className="product-category-container mb-90 mb-md-70 mb-sm-55 pt-50">
      <div className="container wide">
        <Slider {...sliderSettings} className="lezada-slick-slider product-category-slider">
          {categories.map((category, index) => (
            <div key={index} className="col">
              <div className="single-category single-category--two">
                <div className="single-category__image single-category__image--two">
                  <img src={category.image} className="img-fluid" alt="" />
                </div>
                <div className="single-category__content single-category__content--two mt-25">
                  <div className="title">
                    <a href="shop-left-sidebar.html">{category.title}</a>
                  </div>
                  <p className="product-count">{category.count}</p>
                </div>
                <a href="shop-left-sidebar.html" className="banner-link" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
   </>
  )
}

export default Slideshow