import React from 'react'
import image1 from '/assets/images/products/glass2.jpg'
import image2 from '/assets/images/products/glass1.jpg'

function Products() {
    const products = [
        {
          id: 1,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 2,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 3,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 4,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 5,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 6,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 7,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 8,
          name: 'Product name',
          image1: image1,
          image2: image2,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        // {
        //   id: 9,
        //   name: 'Product name',
        //   image1: './assets/images/products/glass2.jpg',
        //   image2: './assets/images/products/glass1.jpg',
        //   sizes: ['L', 'M', 'S', 'XS'],
        //   colors: ['black', 'blue', 'yellow'],
        //   discountPercentage: 10,
        //   originalPrice: 180.00,
        //   discountedPrice: 160.00,
        // },
        // {
        //   id: 10,
        //   name: 'Product name',
        //   image1: './assets/images/products/glass2.jpg',
        //   image2: './assets/images/products/glass1.jpg',
        //   sizes: ['L', 'M', 'S', 'XS'],
        //   colors: ['black', 'blue', 'yellow'],
        //   discountPercentage: 10,
        //   originalPrice: 180.00,
        //   discountedPrice: 160.00,
        // },
      ];
  return (
   <>
    {/*=======  single product  =======*/}
    {products.map((product) => (
        <div  key={product.id} className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45">
          <div className="single-product">
            {/*=======  single product image  =======*/}
            <div className="single-product__image">
              <a className="image-wrap" href="shop-product-basic.html">
                <img
                  src={product.image1}
                  className="img-fluid"
                  alt=""
                />
                <img
                  src={product.image2}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="single-product__floating-badges">
                <span className="onsale">-{product.discountPercentage}%</span>
              </div>
              <div className="single-product__floating-icons">
                <span className="wishlist">
                  <a
                    href="#"
                    data-tippy="Add to wishlist"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay={50}
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                    data-tippy-placement="left"
                  >
                    <i className="ion-android-favorite-outline" />
                  </a>
                </span>
                <span className="compare">
                  <a
                    href="#"
                    data-tippy="Compare"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay={50}
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                    data-tippy-placement="left"
                  >
                    <i className="ion-ios-shuffle-strong" />
                  </a>
                </span>
                <span className="quickview">
                  <a
                    className="cd-trigger"
                    href="#qv-1"
                    data-tippy="Quick View"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay={50}
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                    data-tippy-placement="left"
                  >
                    <i className="ion-ios-search-strong" />
                  </a>
                </span>
              </div>
            </div>
            {/*=======  End of single product image  =======*/}
            {/*=======  single product content  =======*/}
            <div className="single-product__content">
              <div className="title">
                <h3>
                  {" "}
                  <a href="shop-product-basic.html">{product.name}</a>
                </h3>
                <a href="#">Add to cart</a>
              </div>
              {/* <div className="price">
                <span className="main-price">$130.00</span>
              </div> */}
              <div className="price">
                <span className="main-price discounted">₹{product.discountedPrice}</span>
                <span className="discounted-price">₹{product.originalPrice}</span>
              </div>
            </div>
            {/*=======  End of single product content  =======*/}
          </div>
        </div>
          ))}
   </>
  )
}

export default Products