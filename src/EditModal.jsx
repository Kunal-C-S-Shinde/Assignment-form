import React,{ useState,useEffect } from 'react'

const EditModal = ({ rowData, onSave, onClose }) => {
  const [editedData, setEditedData] = useState(rowData);

  const [nameError,setNameError]=useState('');
  const [emailError,setEmailError]=useState('');
  const [contactError,setContactError]=useState('');
  const [dobError,setDobError]=useState('');



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  setEditedData((prevData) => ({
    ...prevData,
    [name]: type === 'checkbox' ? checked : value,
  }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setContactError('');
    setDobError('');
    
    if(!editedData.name){
      setNameError('Name is required');
    }

    if(!editedData.email){
      setEmailError('Email is required');
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editedData.email)){
     setEmailError('Invalid email address');
    }

    if(!editedData.contact){
      setContactError('Contact is required');
    }
  
    if(!editedData.dob){
      setDobError('Date of birth is required');
    }

    if(nameError || emailError || contactError || dobError){
      return;
    }

    onSave(editedData);
    onClose();
  };

  useEffect(() => {
    setNameError('');
    setEmailError('');
    setContactError('');
    setDobError('');
  }, [editedData]); 


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Row</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Name:
          <input
            className={`w-full border rounded-md p-2 ${nameError ? 'border-red-500' : 'border-gray-300'}`}
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
            required
          />
          {nameError && <p className='text-red-500 text-sm mt-1'>{nameError}</p>}
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Email:
          <input
            className={`w-full border rounded-md p-2 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
            type="email"
            name="email"
            value={editedData.email}
            onChange={handleChange}
            required
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Contact:
          <input
            className={`w-full border rounded-md p-2 ${contactError ? 'border-red-500' : 'border-gray-300'}`}
            type="number"
            name="contact"
            value={editedData.contact}
            onChange={handleChange}
            required
          />
          {contactError && <p className="text-red-500 text-sm mt-1">{contactError}</p>}
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          <input
            className="w-4 h-4 pt-2 mr-2"
            type="checkbox"
            name="weekday"
            checked={editedData.weekday}
            onChange={handleChange}
          
          />
          Weekday(Monday to Friday)
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Gender:
          <label className="m-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={editedData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={editedData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </label>
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Date of Birth:
          <input
           className={`w-full border rounded-md p-2 ${dobError ? 'border-red-500' : 'border-gray-300'}`}
            type="date"
            name="dob"
            value={editedData.dob}
            onChange={handleChange}
            required 
          />
          {dobError && <p className="text-red-500 text-sm mt-1">{dobError}</p>}
        </label>
        <div className="flex">
          <button
            type="submit"
            className="bg-blue-500 w-20 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
          >
            Cancel
          </button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default EditModal