import React, { useContext, useRef } from 'react'
import ShoeContext from './Context/ShoeContext'

const ShoeInput = () => {
  const shoeNameRef=useRef()
  const descriptionRef=useRef()
  const priceRef=useRef()
  const lref=useRef()
  const mref=useRef()
  const sref=useRef()
  const shoeCtx=useContext(ShoeContext)
  function addToDisplay(e){
    e.preventDefault()
    const details={'Name':shoeNameRef.current.value,'Description':descriptionRef.current.value,'Id':Math.random().toString(),'Price':priceRef.current.value,'L':lref.current.value,'M':mref.current.value,'S':sref.current.value,'Qty':0,'Size':''}
    shoeCtx.addShoeToDisplay(details)

  }
  return (
    <form onSubmit={addToDisplay}>
      <label htmlFor='shoeName'>Shoe Name</label>
      <input type='text' id='shoeName' ref={shoeNameRef}/>
      <label htmlFor='description'>Description</label>
      <input type='text' id='description' ref={descriptionRef}/>
      <label htmlFor='price'>Price</label>
      <input type='number' id='price' ref={priceRef}/>
      <label htmlFor='L'>L</label>
      <input type='number' id='L' ref={lref}/>
      <label htmlFor='M'>M</label>
      <input type='number' id='M' ref={mref}/>
      <label htmlFor='S'>S</label>
      <input type='number' id='S' ref={sref}/>
      <button type='submit'>Add Product</button>
    </form>
  )
}

export default ShoeInput
