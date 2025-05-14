import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseRef from "./Compontents/UseRef"
import StopWatch from './Compontents/StopWatch'
import Carousel from './Compontents/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseRef/> */}
      {/* <StopWatch/> */}
      <Carousel/>
    </>
  )
}

export default App
