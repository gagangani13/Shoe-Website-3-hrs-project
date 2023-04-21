import React from 'react'
import ShoeProvider from './components/Context/ShoeProvider'
import MainHome from './components/MainHome'
const App = () => {
  return (
    <ShoeProvider>
      <MainHome/>
    </ShoeProvider>
    
  )
}

export default App
