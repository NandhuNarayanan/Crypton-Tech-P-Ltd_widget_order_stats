import React from 'react'
import './order.scss'


function OrderStat( {img, percantage,amount,title,color}) {



console.log(color)

  return (
    <>
      <div>
        <div className='widget-main'>
            <span>
                {title}
            </span>
            <div style={color}>
                {percantage}
            </div>
        </div>

        <div className='order-stat'>
            <div className='imgArea'>
                <img src={img} alt="Logo" />
            </div>
            <div className='order-num'>
                 <span>$ {amount}</span>
            </div>
        </div>
        </div>  
    </>
  )
}

export default OrderStat