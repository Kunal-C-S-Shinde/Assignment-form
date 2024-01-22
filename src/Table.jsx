import React from 'react'

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='max-w-md mx-auto rounded-md border-collapse bg-white my-3 shadow-2xl'>
        <thead>
          <tr className='bg-gray-50'>
          <th className="py-2 px-4 border">S.No</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Contact</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Weekday</th>
            <th className="py-2 px-4 border">Gender</th>
            <th className="py-2 px-4 border">DOB</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index)=>
            <tr key={index} className="hover:bg-gray-100">
            <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{row.name}</td>
              <td className="py-2 px-4 border">{row.contact}</td>
              <td className="py-2 px-4 border">{row.email}</td>
              <td className="py-2 px-4 border">{row.weekday ? 'Yes' : 'No'}</td>
              <td className="py-2 px-4 border">{row.gender}</td>
              <td className="py-2 px-4 border">{row.dob}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-yellow-400 text-black w-16 px-2 py-1 mr-1 my-1 rounded hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-300"
                  onClick={() => onEdit(row)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white  w-16 px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                  onClick={() => onDelete(row)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    </>
  )
}

export default Table