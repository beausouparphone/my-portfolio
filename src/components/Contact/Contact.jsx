import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>contact me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <div className="contact-detail">
            <p>beausouparphone@gmail.com</p>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor=''>your name</label>
          <input type='text' placeholder='enter your name' name='name' />
          <label htmlFor=''>your email</label>
          <input type='email' placeholder='enter your email' name='email' />
          <label htmlFor=''>your message here</label>
          <textarea type='message' rows={8} placeholder='enter your message'></textarea> 
          <button type='submit' className="contact-submit">submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact