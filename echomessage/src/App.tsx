import React from 'react'
import "./App.css"
const App = () => {
  function sendMessage(){

  }
  return (
    <div>
      <input type="text" placeholder='Message.....' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
