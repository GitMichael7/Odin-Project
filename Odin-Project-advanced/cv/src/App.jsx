import { useState } from 'react'

import './App.css'

function App() {
  //const [cv, setcv] = useState(0)
  //onSubmit={handleSubmit}
  return (
    <>
      <form>
        <div class="form-group">
        <label for="name">Name: </label>
          <input
            name="name"
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="email">Email: </label>
          <input
            name="email"
            type="Email"></input>
          </div>
          <div class="form-group">
        <label for="phone">Phone: </label>
          <input
            name="phone"
            type="phone"></input>
          </div>
          <div class="form-group">
        <label for="school">School: </label>
          <input
            name="school"
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="title">Title: </label>
          <input
            name="title"
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="date">Finished: </label>
          <input
            name="date"
            type="date"></input>
          </div>
          <div class="form-group">
        <label for="company">Company: </label>
          <input
            name="company"
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="position">Position: </label>
          <input
            name="position"
            type="text"></input>
          </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
