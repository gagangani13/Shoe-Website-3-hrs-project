import React, { useState } from 'react'
import ShoeContext from './ShoeContext'
const ShoeProvider = (props) => {
  const[data,updateData]=useState([])
    function addShoeToDisplayHandler(shoe) {
        updateData([...data,shoe])
    }
    function addToCartSHandler(id) {
      const details=data.filter((item)=>{
        if(item.Id===id &&item.S>0){
          return (item.S=item.S-1,
            item.Qty+=1,item.Size+=`S `)
        }
        return item
      })
      updateData(details)
    }
    function addToCartMHandler(id) {
      const details=data.filter((item)=>{
        if(item.Id===id &&item.M>0){
          return (item.M=item.M-1,
            item.Qty+=1,item.Size+=`M `)
        }
        return item
      })
      updateData(details) 
    }
    function addToCartLHandler(id) {
      const details=data.filter((item)=>{
        if(item.Id===id &&item.L>0){
          return (item.L=item.L-1,
            item.Qty+=1,item.Size+=`L `)
        }
        return item
      })
      updateData(details)
    }
    const shoeContext={
        items:data,
        addShoeToDisplay:addShoeToDisplayHandler,
        addToCartS:addToCartSHandler,
        addToCartL:addToCartLHandler,
        addToCartM:addToCartMHandler,
    }
  return (
    <ShoeContext.Provider value={shoeContext}>
        {props.children}
    </ShoeContext.Provider>
  )
}

export default ShoeProvider
