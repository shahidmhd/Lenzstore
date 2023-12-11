// import React from 'react'
// import { Link } from 'react-router-dom'

// function Logo() {
//   return (
//    <>
//         <div className="logo">
//             <Link to={'/'}>
//             <img src="assets/images/products/logowithtext.png" className="img-fluid" alt=""/>
//             </Link>
//           </div>
//    </>
//   )
// }

// export default Logo

import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '/assets/images/products/onlylogo.png'
import image2 from '/assets/images/products/logowithtext.png'
function Logo() {
  return (
    <div className="logo">
      {/* Mobile Logo */}
      <Link to={'/'} className="d-sm-block d-md-none">
        <img src={image1} className="img-fluid" alt="Mobile Logo" style={{ width: '100px' }} />
      </Link>

      {/* Desktop Logo */}
      <Link to={'/'} className="d-none d-md-block">
        <img src={image2} className="img-fluid" alt="Desktop Logo" />
      </Link>
    </div>
  );
}

export default Logo;


