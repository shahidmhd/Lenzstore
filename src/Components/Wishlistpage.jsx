import React from 'react'

function Wishlistpage() {
  const buttonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: 0,
    margin: 0,
    outline: 'none',
  };

  // Array of default wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: 'Eye glass',
      color: 'Black',
      price: 100.0,
      imageUrl: 'assets/images/products/glass2.jpg',
      quantity: 7,
    },
    {
      id: 2,
      name: 'Eye glass',
      color: 'Brown',
      price: 50.0,
      imageUrl: 'assets/images/products/glass2.jpg',
      quantity: 3,
    },
    {
      id: 3,
      name: 'Eye glass',
      color: 'Silver',
      price: 120.0,
      imageUrl: 'assets/images/products/glass2.jpg',
      quantity: 1,
    },
  ];
  return (
    <>
      {/*=======  breadcrumb area =======*/}
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="breadcrumb-title">Wishlist</h1>
            {/*=======  breadcrumb list  =======*/}
            <ul className="breadcrumb-list">
              <li className="breadcrumb-list__item">
                <a href="index.html">HOME</a>
              </li>
              <li className="breadcrumb-list__item breadcrumb-list__item--active">
                wishlist
              </li>
            </ul>
            {/*=======  End of breadcrumb list  =======*/}
          </div>
        </div>
      </div>
    </div>
    {/*=======  End of breadcrumb area =======*/}
  
  {/*=============================================
	=            wishlist page content         =
	=============================================*/}
  <div className="shopping-cart-area mb-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/*=======  cart table  =======*/}
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="product-name" colSpan={2}>
                    Product
                  </th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">&nbsp;</th>
                  <th className="product-remove">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
              {wishlistItems.map((item) => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <a href="shop-product-basic.html">
                            <img
                              src={item.imageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="shop-product-basic.html">{item.name}</a>
                          <span className="product-variation">
                            Color: {item.color}
                          </span>
                        </td>
                        <td className="product-price">
                          <span className="price">₹{item.price.toFixed(2)}</span>
                        </td>
                        <td className="product-quantity">
                          <div className="pro-qty d-inline-block mx-0">
                            <button
                              style={buttonStyle}
                            >
                              -
                            </button>
                            <input type="text" value={item.quantity} readOnly />
                            <button
                              style={buttonStyle}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="add-to-cart">
                          <button className="lezada-button lezada-button--small lezada-button--icon--left">
                            <i className="ion-ios-cart-outline" /> add to cart
                          </button>
                        </td>
                        <td className="product-remove">
                          <a href="#">
                            <i className="ion-android-close" />
                          </a>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          {/*=======  End of cart table  =======*/}
        </div>
      </div>
    </div>
  </div>
  {/*=====  End of wishlist page content  ======*/}
</>

  )
}

export default Wishlistpage