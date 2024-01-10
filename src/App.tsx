import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice"


function App() {
const dispatch = useDispatch()
const {count} = useSelector((state)=>state.counter)
  return (

      <div className="flex justify-center items-center h-screen ">
      <button onClick={()=>dispatch(increment())} className="px-4 py-4 bg-green-500 rounded-lg mx-5">increment</button>
      <h1 className="text-3xl ">{count}</h1>
      <button onClick={()=>dispatch(decrement())} className="px-4 py-4 bg-green-500 rounded-lg mx-5">decrement</button>
    </div>
  )
}

export default App
