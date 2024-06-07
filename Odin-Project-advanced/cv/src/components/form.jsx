import { useState } from 'react'
import React from 'react';


function Cvform() {
  const [cv, setcv] = useState({name: "", email: "", phone: "", school: "", title: "", date: "", company: "", position: ""
  })

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setcv({...cv, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(cv)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="name">Name: </label>
          <input
            name="name"
            value={cv.name}
            type="text"
            onChange={handleChange}></input>
          </div>
          <div class="form-group">
        <label for="email">Email: </label>
          <input
            name="email"
            value={cv.email}
            onChange={handleChange}
            type="Email"></input>
          </div>
          <div class="form-group">
        <label for="phone">Phone: </label>
          <input
            name="phone"
            value={cv.phone}
            onChange={handleChange}
            type="phone"></input>
          </div>
          <div class="form-group">
        <label for="school">School: </label>
          <input
            name="school"
            value={cv.school}
            onChange={handleChange}
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="title">Title: </label>
          <input
            name="title"
            value={cv.title}
            onChange={handleChange}
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="date">Finished: </label>
          <input
            name="date"
            value={cv.date}
            onChange={handleChange}
            type="date"></input>
          </div>
          <div class="form-group">
        <label for="company">Company: </label>
          <input
            name="company"
            value={cv.company}
            onChange={handleChange}
            type="text"></input>
          </div>
          <div class="form-group">
        <label for="position">Position: </label>
          <input
            name="position"
            value={cv.position}
            onChange={handleChange}
            type="text"></input>
          </div>
        <button type="submit">Submit</button>
        <button type="edit">Edit</button>
      </form>

    { submittedData && (
        <div>
<h2>CV Information</h2>
<p>Name: {submittedData.name}</p>
<p>Email: {submittedData.email}</p>
<p>Phone: {submittedData.phone}</p>
<p>School: {submittedData.school}</p>
<p>Title: {submittedData.title}</p>
<p>Finished: {submittedData.finished}</p>
<p>Company: {submittedData.company}</p>
<p>Position: {submittedData.position}</p>



        </div>
    )
    
    
    }






    </>
  )
}

export default Cvform
