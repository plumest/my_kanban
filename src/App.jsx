import React, { useState } from 'react'
import { Board } from './Board' 
import './App.css'

function App() {
  const [data, setData] = useState([])

  return (
    <div className="App">
      <main>
        <Board />
      </main>
    </div>
  )
}

export default App;