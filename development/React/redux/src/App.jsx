import { useDispatch, useSelector } from "react-redux"
import {increment} from "./reduxConfig/counterSlice" 


function App() {
  const {count} = useSelector(state => state.counterState)
  const dispatch = useDispatch()
  return (
    <>
    <button onClick={()=>{ dispatch(increment()) }}>+</button>
      <p>{count}</p>
    <button onClick={()=>{ }}>-</button>
    <button onClick={()=>{ }}>reset</button>
    </>
  )
}

export default App
