import React from 'react'
import Instagram from '../Components/Instagram'
import FooterTop from '../Components/FooterTop'
import SHome from '../Components/Slider/SHome'
import Productcontainer from '../Components/Productcontainer'
import Offerbanner from '../Components/Offerbanner'
import Slideshow from '../Components/Slideshow'


function Home() {
 
  return (
   <>

   <SHome/>
  <Slideshow/>
 <Productcontainer/>
 <Offerbanner/>
 <Productcontainer/>
      <Instagram />
      <FooterTop />
   </>
  )
}

export default Home