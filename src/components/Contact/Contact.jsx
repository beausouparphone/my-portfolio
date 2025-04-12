import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", '330080a4-45bd-409e-b0fb-32cb0a771da2');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert('Email sent!');
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
        <form className="contact-right" onSubmit={onSubmit} >
          <label htmlFor=''>your name</label>
          <input type='text' placeholder='enter your name' name='name' />
          <label htmlFor=''>your email</label>
          <input type='email' placeholder='enter your email' name='email' />
          <label htmlFor=''>your message here</label>
          <textarea name='message' rows={8} placeholder='enter your message'></textarea> 
          <button type='submit' className="contact-submit">submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact