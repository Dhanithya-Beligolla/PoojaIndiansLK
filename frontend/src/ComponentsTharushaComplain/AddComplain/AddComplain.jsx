import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddComplain() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!inputs.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z ]{1,15}$/.test(inputs.name.trim())) {
      errors.name = 'Name should contain only letters and spaces, between 1 and 15 characters';
      isValid = false;
    }

    if (!inputs.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!inputs.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!inputs.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (inputs.message.trim().length < 1 || inputs.message.trim().length > 100) {
      errors.message = 'Message must be between 1 and 100 characters';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendRequest().then(() => history("/complaindetails"));
    }
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5500/complains/createComplain", {
      name: inputs.name,
      email: inputs.email,
      subject: inputs.subject,
      message: inputs.message,
    }).then(res => res.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-5">Add Your Complaint</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={inputs.name} onChange={e => setInputs({ ...inputs, name: e.target.value })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`} />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={inputs.email} onChange={e => setInputs({ ...inputs, email: e.target.value })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'}`} />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject:</label>
          <select name="subject" id="subject" value={inputs.subject} onChange={e => setInputs({ ...inputs, subject: e.target.value })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.subject && 'border-red-500'}`}>
            <option value="">Select a subject</option>
            <option value="quality issue">Quality Issue</option>
            <option value="technical issue">Technical Issue</option>
            <option value="product issue">Product Issue</option>
          </select>
          {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
          <textarea name="message" id="message" value={inputs.message} onChange={e => setInputs({ ...inputs, message: e.target.value })} rows="5" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message && 'border-red-500'}`}></textarea>
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>
        <input type="submit" value="Submit your ticket" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      </form>
    </div>
  );
}