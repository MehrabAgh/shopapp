import React from 'react'
import Cards_Offer from './Cards_Offer'
function Offer() {
  return (
    <div>
      <div style={{backgroundColor:'red'}}>
       <img style={{ padding: '7%' }} src={require("../Media/" + 'promotion-center-text.svg')} alt={'banner'} />
       </div>
       <div className='bodyOffer'>
       <Cards_Offer Name={"ss"} img={"fifa-18-800x450.jpg"} price={'40000'} off={true} rates={'60'} offer={'50'} />
       <Cards_Offer Name={"ss"} img={"fifa-18-800x450.jpg"} price={'40000'} off={true} rates={'60'} offer={'50'} />
       <Cards_Offer Name={"ss"} img={"fifa-18-800x450.jpg"} price={'40000'} off={true} rates={'60'} offer={'50'} />
       <Cards_Offer Name={"ss"} img={"fifa-18-800x450.jpg"} price={'40000'} off={true} rates={'60'} offer={'50'} />
       </div>
    </div>
  )
}

export default Offer