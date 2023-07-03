import {useState} from "react"

function App() {
  const [name , setName] = useState(0)
  
  function increment() {
    setName((prevValue)=>{
      return prevValue + 1
    })
  }

  return (
    <>
      <div>
       {name}
      </div>
      <button onClick={increment}>Click me</button>
    </>
  )
}

export default App
