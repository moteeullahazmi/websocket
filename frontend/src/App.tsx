
import { useEffect, useState } from "react"
import "./App.css"
const App = () => {
  const [socket, setSocket] = useState();

  function sendMessage(){
    ws.send("ping")
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)
    ws.onmessage = (e) =>{
      console.log(e.data)
    }
  },[])
  return (
    <div>
      <input type="text" placeholder='Message.....' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
