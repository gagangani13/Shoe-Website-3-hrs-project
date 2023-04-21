import React, { useContext } from 'react'
import ShoeContext from './Context/ShoeContext'

const CartButton = (props) => {
  const details=useContext(ShoeContext)
  const quantity=details.items.reduce((acc,curr)=>{
    return acc+curr.Qty
  },0)
  return (
    <div>
      <button onClick={props.showCart}>Cart{`(${quantity})`}</button>
    </div>
  )
}

export default CartButton
