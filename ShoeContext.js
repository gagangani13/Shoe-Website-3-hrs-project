import { createContext } from 'react'

const ShoeContext = createContext({
    items:[],
    addShoeToDisplay:(shoe)=>{},
    addToCartS:(id)=>{},
    addToCartL:(id)=>{},
    addToCartM:(id)=>{},
})

export default ShoeContext
