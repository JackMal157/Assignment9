import { useState } from 'react'
import './App.css'

const book = {
  title: 'TD Garden',
  location: 'Boston, MA',
  image: 
  
}

function MagicButton() {
  return (
    <button>Click here</button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jack's React Site!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <MagicButton/>
    </>
  )
}

export default App
