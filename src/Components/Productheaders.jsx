import React from 'react'

function Productheaders({data}) {
  return (
  <>
  <div className="section-title-container mb-80 mb-md-60 mb-sm-40 pt-25">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/*=======  section title  =======*/}
        <div className="section-title section-title--one text-center">
          <h1>{data?data:"EyeGlass"}</h1>
          <p className="subtitle subtitle--deep subtitle--trending-home">
            Find your style. Fall fashion 20xx
          </p>
        </div>
        {/*=======  End of section title  =======*/}
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Productheaders