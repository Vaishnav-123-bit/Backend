import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/counter/actions'

const Counter = () => {
    const count=useSelector(state=>state.value)
    const dispatch=useDispatch()

    const handlePlus=()=>{
        dispatch(increment())
    }
  return (
    <div className="p-4 h-52 w-96 items-center justify-center space-y-5">
        <div>
        <div className='text-2xl font-semibold'>{count}</div>
        <div>
            <button onClick={handlePlus}>Increment</button>
            <button>Decrement</button>
        </div>
        </div>
    </div>
  )
}

export default Counter