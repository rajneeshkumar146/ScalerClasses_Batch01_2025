import './App.css'
import Counter from './components/normalComponent/Counter'
import CounterRedux from './components/reduxComponent/CounterRedux'
import TodoRedux from './components/reduxComponent/TodoRedux'

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux /> */}
      <TodoRedux />
    </>
  )
}

export default App
