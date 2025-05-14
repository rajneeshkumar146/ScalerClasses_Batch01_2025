import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseRef from "./Compontents/UseRef"
import StopWatch from './Compontents/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseRef/> */}
      <StopWatch/>
    </>
  )
}

export default App
