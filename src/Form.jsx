import React, { useState,useEffect } from 'react'

const Form = ({ onSubmit }) => {

  const [formData,setFormdata]=useState({
    name:'',
    email:'',
    contact:'',
    weekday:false,
    gender:'',
    dob:'',
  });

  const [nameError,setNameError]=useState('');
  const [emailError,setEmailError]=useState('');
  const [contactError,setContactError]=useState('');
  const [dobError,setDobError]=useState('');

  const handleChange=(e)=>{
    const { name, value, type, checked }= e.target;
    setFormdata((prevData)=>({
      ...prevData,
      [name]: type==='checked'? checked : value,
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setContactError('');
    setDobError('');

    if(!formData.name){
      setNameError('Name is required');
    }

    if(!formData.email){
      setEmailError('Email is required');
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      setEmailError('Invalid email address');
    }

    if(!formData.contact){
      setContactError('Contact is required');
    }
  
    if(!formData.dob){
      setDobError('Date of birth is required');
    }

    if(nameError || emailError || contactError || dobError){
      return;
    }

    onSubmit(formData);

    setFormdata({
      name:'',
      email:'',
      contact:'',
      weekday:false,
      gender:'',
      dob:'',
    });
  }

  useEffect(() => {
    setNameError('');
    setEmailError('');
    setContactError('');
    setDobError('');
  }, [formData]); 

  return (
    <>
    <form className="max-w-md mx-auto p-6 mt-2 bg-white rounded-md shadow-2xl" onSubmit={handleSubmit}>
    <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Name:
          <input 
          className={`w-full border rounded-md p-2 ${nameError ? 'border-red-500' : 'border-gray-300'}`}
          type='text' 
          name='name' 
          placeholder='Enter Name' 
          value={formData.name}
          onChange={handleChange}
          required
          />
        </label>
        {nameError && <p className='text-red-500 text-sm mt-1'>{nameError}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Email:
          <input 
          className={`w-full border rounded-md p-2 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
          type='email' 
          name='email' 
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          required
          />
          </label>
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
          Contact:
          <input 
          className={`w-full border rounded-md p-2 ${contactError ? 'border-red-500' : 'border-gray-300'}`}
          type='number' 
          name='contact' 
          placeholder='Enter Contact'
          value={formData.contact}
          onChange={handleChange}
          required
          />
        </label>
        {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          <input 
          className="w-4 h-4 pt-2 mr-2"
          type='checkbox' 
          name="weekday"
          checked={formData.weekday}
          onChange={handleChange}
          
          />
           Weekday (Monday to Friday)
        </label>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Gender: 
          <label className='m-2'>
          <input 
          type='radio' 
          name='gender'
          value='Male'
          checked={formData.gender === 'Male'}
          onChange={handleChange}
          />
          Male 
          </label>
          <label>
          <input 
          type='radio' 
          name='gender' 
          value='Female'
          checked={formData.gender === 'Female'}
          onChange={handleChange}
          required
          />
            Female 
          </label>
        </label>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Date of Birth:
          <input 
          className={`w-full border rounded-md p-2 ${dobError ? 'border-red-500' : 'border-gray-300'}`}
          type='date'
          name='dob'
          value={formData.dob}
          onChange={handleChange}
          required
          />
        </label>
        {dobError && <p className="text-red-500 text-sm mt-1">{dobError}</p>}
        </div>
        <div>
          <button 
          className="bg-blue-500 text-white px-8 py-2  rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
        </div>
    </form>
    </>
  )
}

export default Form