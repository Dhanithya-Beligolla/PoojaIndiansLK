import React from 'react'
import NavBar from '../../../componentsTharushaReview/NavBar'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
  }

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '18px'
  }

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '10px'
  }

  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div className="container mt-5" style={containerStyle}>
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required style={inputStyle} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required style={inputStyle} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required style={inputStyle} />
        </div>
        <button className="btn btn-danger" type="submit" style={buttonStyle}>
          {formStatus}
        </button>
      </form>
      <br></br><br></br><br></br>
    </div>
    
    </>
  )
}
export default ContactForm