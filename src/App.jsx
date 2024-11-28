import { useState, } from 'react'
import './App.css'
import Timer from './useEffect';
import UseContext, { ThemeProvider } from './useContext';
function App() {

  
  const [count, setCount] = useState(0)
  const [name, setname] = useState("")

   function decrementCount(){
    setCount(prevCount => prevCount - 1)

   }

   function incrementCount(){
    setCount(prevCount => prevCount + 1)

   }
   

  return (
    
    <>

<fieldset>
<div>
  <div className='main-div'>
    <h2><b> </b></h2>

    <div class="usestate">
     <h4>use the UseState Hook</h4>

     <p class="p1">when you may click on that button </p>
      <div className="card">
        <button onClick={incrementCount}>INCREMENT</button>
        <h2>COUNT: [{count}]</h2>
        <button onClick={decrementCount}>DECREMENT</button><br></br><br></br><br></br>

        <p class="p2">Enter your name in this input</p>

        <input 
        type='text'
        placeholder='enter your name'
        onChange={(e)=>{setname(e.target.value)}}
        />
        
        <h4>My name is: {name}</h4>
        </div>
        </div>
        </div>
       
        

        <ThemeProvider>
      <UseContext />
    </ThemeProvider>
    <Timer/>
      </div>
      </fieldset>
    </>
  )
}

export default App

