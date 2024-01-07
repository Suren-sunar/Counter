import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [Number, setNumber] = useState(0)
  return (
   <>
    <h5>Let's Count</h5>
    <h1 className='number'>{Number}</h1>
    <div>
   <button className="Add"onClick={() =>
  setNumber(Number+1)}
  >Add</button>
   <button className="Less" onClick={() =>
  setNumber(Number-1)}
  >Less</button>
   <button className="Reset" onClick={ ()=>
  setNumber(0)}>Reset</button>
  </div>
 </>
  )
}

export default App


