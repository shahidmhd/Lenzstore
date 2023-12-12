import React from 'react'
import Singleproduct from '../Components/Singleproduct'
import Productcontainer from '../Components/Productcontainer'

function Singleproductpage() {
  const data="Related products"
  return (
    <>
    <Singleproduct/>
    <Productcontainer data={data}/>
    </>
  )
}

export default Singleproductpage