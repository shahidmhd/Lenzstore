// import React from "react"
// import Sdata from "./Sdata"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const Slidecard = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     appendDots: (dots) => {
//       return <ul style={{ margin: "0px" }}>{dots}</ul>
//     },
//   }
//   return (
//     <>
//       <Slider {...settings}>
//         {Sdata.map((value, index) => {
//           return (
//             <>
//               <div className='box d_flex top' key={index}>
//                 <div className='left'>
//                   <h1>{value.title}</h1>
//                   <p>{value.desc}</p>
//                   <button className='btn-primary'>Visit Collections</button>
//                 </div>
//                 <div className='right'>
//                   <img src={value.cover} alt='' />
//                 </div>
//               </div>
//             </>
//           )
//         })}
//       </Slider>
//     </>
//   )
// }

// export default Slidecard
// Slidecard.jsx
import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your custom styles

const Slidecard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Sdata.map((value, index) => (
        <div className="banner-container" key={index}>
          <div className="banner-content">
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
            <button className="btn-primary">Visit Collections</button>
          </div>
          <img src={value.cover} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default Slidecard;
