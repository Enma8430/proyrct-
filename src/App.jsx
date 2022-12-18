import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")

  const [textUpgrading, setTextUpgrading] = useState('Valor por defecto')

  const alertText = () => alert(inputValue)
  return (
    <div className="App">
    <div> 
      <input 
        type="text" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        />
      <button onClick={alertText}>Enter</button>
    </div> 
    <div>
      <input 
        type="text" 
        onChange={e => setTextUpgrading(e.target.value)}
        value={textUpgrading}
        />

        <h1>{textUpgrading}</h1>
    </div>
    </div>
  )
}

export default App
