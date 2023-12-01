import React,{useState}from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  let stock = 10;

  return (
    <>
    <h1 class="heading">Counter App in React</h1>
    <div className = "Wrapper">
      <button className='minus' disabled={counter === 0} onClick={() => {
        if(counter>0)  {
          setCounter(counter-1)
        }
      }}>-</button>
      <p class="counter">{counter}</p>
      <button className='plus' disabled={counter === stock}
      onClick={() => {
        if(counter<stock){
          setCounter(counter+1)
        }
      }}>+</button>
     </div>
     </>
  )
}

export default App
