import React from "react"
import Cvform from "./components/form"
import './App.css'

function App() {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=r9xEpbboR5c6f2H2dP8iF8iY2yFvrfCP&s=cats",
    { mode: "cors" }
  )
  

  return (
    <div className="App">
      <h1>CV Form</h1>
      <Cvform />
    </div>
  )
}

export default App
