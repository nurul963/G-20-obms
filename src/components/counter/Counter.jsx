import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    // const [a,b,c]=[2,3,4];
    /*
    Hooks -> it is js function where we write logic and return 
    Rule:
    :) hooks can be used inside functional componenet
    :) hooks can be declare top of the function
    1.useState(initail value)
    it is used to manage state of variable
    react lifeCycle-> Mounting, Updating, Unmounting
    it returns array of two elements 
    i)value of varialbe
    ii)function 
    2.useEffect()
    3.useRef()
    
    */
   const btnIncrement=()=>{
        setCount(count+1);
   }
   const btnDecrement=()=>{
        setCount(count-1);
   }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <div className="card shadow-lg">
                    <div className="card-header">
                        <h2 className='text-center'>Counter</h2>
                    </div>
                    <div className="card-body d-flex">
                        <button className="btn btn-primary"
                        onClick={btnIncrement} 
                        >Increment</button>
                        <button className="btn btn-warning mx-4"
                        onClick={btnDecrement}
                        >Decrement</button>
                        <button className="btn btn-warning mx-3"
                        onClick={()=>setCount(0)}
                        >Reset</button>
                        <h4>{count}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter