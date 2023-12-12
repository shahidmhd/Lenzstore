import React from 'react'
import Instagram from '../Components/Instagram'
import FooterTop from '../Components/FooterTop'
import SHome from '../Components/Slider/SHome'
import Productcontainer from '../Components/Productcontainer'
import Offerbanner from '../Components/Offerbanner'
import Slideshow from '../Components/Slideshow'


function Home() {
 const data1="New Arrivals"
 const data2="Trending"
  return (
   <>

   <SHome/>
  <Slideshow/>
 <Productcontainer/>
 <Offerbanner/>
 <Productcontainer data={data2}/>
 <Productcontainer data={data1}/>
      <Instagram />
      <FooterTop />
   </>
  )
}

export default Home