import React, { useState } from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/CounterSlice'

function Counter() {

  const [range, setRange] = useState()

    const dispatch = useDispatch()//hook to dispatch a function in action

    //component can access the state by using useSelector hook

    const count = useSelector((state)=>state.counter.value)

    console.log(range);

  return (
    <div>
         <div className='main'>
        
        <div className='div-container'>

        <h1>Counter Application</h1>
         
         <div>
           <h1>{count}</h1>
         </div>

         <div className='btn-class'>

           <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning text-white'>decrement</button>
           <button onClick={()=>dispatch(reset())} className='btn btn-danger text-white'>reset</button>
           <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success text-white'>increment</button>
         </div>
         <div className='w-100'>
        <input type="text" className=' form-control' onChange={(e)=>{setRange(e.target.value)}} placeholder=' Enter the Range'style={{borderColor: 'blue'}}/>
         </div>

        </div>

         </div>

    </div>
  )
}

export default Counter