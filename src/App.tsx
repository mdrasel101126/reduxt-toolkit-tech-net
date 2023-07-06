import { decreament, increament, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
function App() {
  const {count}=useAppSelector(state=>state.counter);
  const dispatch=useAppDispatch()
  return (
   <div>
    <div className="flex justify-center items-center mt-5">
      <button onClick={()=>dispatch(increament())} className="mx-4 bg-blue-600 p-2 text-white font-bold">
        Increament
      </button>
      <div className="mx-4">{count}</div>
      <button onClick={()=>dispatch(decreament())}  className="mx-4 bg-blue-600 p-2 text-white font-bold">Decreament</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}  className="mx-4 bg-blue-600 p-2 text-white font-bold">Increament By Value</button>
    </div>
   </div>
  )
}

export default App
