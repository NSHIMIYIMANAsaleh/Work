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


<div>
  <div className='main-div'>
    <h2><b> <i>  My Name is NSHIMIYIMANA Saleh  </i> </b></h2>

     <h4 className="h1">Side of using the UseState Hook in React</h4>
     <p class="p1">Click on the button if you want to count the number </p>
      <div className="card">
        <button onClick={incrementCount}>+</button>
        <h1>{count}</h1>
        <button onClick={decrementCount}>-</button><br></br><br></br><br></br>

        <p class="p2"> your name in this input you can see it on the bottom of that input</p>

        <input 
        type='text'
        placeholder='enter your name'
        onChange={(e)=>{setname(e.target.value)}}
        />
        <h4>My name is: {name}</h4>

        </div>
        </div>
        

        <ThemeProvider>
      <UseContext />
    </ThemeProvider>
    <Timer/>
    <footer><i>prepared by saro E_mail: s92313243@gmail.com copy right @ 2024</i></footer>
      </div>
    
    </>
  )
}

export default App

