// import React from 'react';
// import "./Home.css";
// import SliderHome from './SliderHome';

// function SHome() {
//   return (
//     <section classNameName='home'>
//       <div classNameName='container d_flex'>
//         <SliderHome />
//       </div>
//     </section>
//   );
// }

// export default SHome;
import React from 'react'
import './Home.css'
function SHome() {
  return (
    <>
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

<div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://www.cleardekho.com/wp-content/uploads/2023/12/1800x450-Dekstop.gif" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <div className="custom-carousel-content">
                <h1>
                    <span>Best Ecommerce Solutions 1 </span>
                    to Boost your Brand Name &amp; Sales
                </h1>
                {/* <p>
                    We offer an industry-driven and successful digital marketing strategy that helps our clients
                    in achieving a strong online presence and maximum company profit.
                </p> */}
                <div>
                    <a href="/shop" className="btn btn-slider">
                        Get Now
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <img src="https://www.cleardekho.com/wp-content/uploads/2023/12/1800x450-Dekstop.gif" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <div className="custom-carousel-content">
                <h1>
                    <span>Best Ecommerce Solutions 2 </span>
                    to Boost your Brand Name &amp; Sales
                </h1>
                {/* <p>
                    We offer an industry-driven and successful digital marketing strategy that helps our clients
                    in achieving a strong online presence and maximum company profit.
                </p> */}
                <div>
                    <a href="/shop" className="btn btn-slider">
                        Get Now
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <img src="https://www.cleardekho.com/wp-content/uploads/2023/12/1800x450-Dekstop.gif" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
            <div className="custom-carousel-content">
                <h1>
                    <span>Best Ecommerce Solutions 3 </span>
                    to Boost your Brand Name &amp; Sales
                </h1>
                {/* <p>
                    We offer an industry-driven and successful digital marketing strategy that helps our clients
                    in achieving a strong online presence and maximum company profit.
                </p> */}
                <div>
                    <a href="/shop" className="btn btn-slider">
                        Get Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>
    </>
  )
}

export default SHome