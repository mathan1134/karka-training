import React from 'react'

export const Button=(Props)=>{
    let Count=Props.count
    const Increase=()=>{
        Count=Count+1
        console.log(Count)
    }
    
    const Decrease =()=>{
        Count=Count-1
        console.log(Count)
    }






  return (
    <div>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>

    </div>
  )
}
