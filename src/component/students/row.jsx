import React, { useState } from 'react';

const Row = ({ contacts, setEditing, editing, handleSave,handleDelete}) => {
  const Editing = editing === contacts.id;

  const [formData, setFormData] = useState({
    name: contacts.Name,
    batch: contacts.batch,
    mail: contacts.mail,
    phone: contacts.phoneNumber,
  });

  const handleChange = (data) => {
    const { name, value } = data.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setEditing(contacts.id);
  };

  const handleCancel = () => {
    setEditing(null);
    setFormData({
      name: contacts.Name,
      batch: contacts.batch,
      mail: contacts.mail,
      phone: contacts.phoneNumber,
    });
  };

  const handleSubmit = () => {
    handleSave(contacts.id, {
      Name: formData.name,
      batch: formData.batch,
      mail: formData.mail,
      phoneNumber: formData.phone,
    });
};

  const inputClass =
    'p-1 rounded border border-gray-300 w-full bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <>
    <tr className="even:bg-white/5 odd:bg-transparent hover:bg-white/10 transition">
    {/* condition  */}
      {Editing ? (
        <>
        {/* only work when click edit button */}
          <td className="px-6 py-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className={inputClass}
             
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              className={inputClass}
            
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
             
            />
          </td>
          <td className="px-6 py-4 flex gap-2">
            <button onClick={handleSubmit} className="text-green-500 hover:underline">Save</button>
            <button onClick={handleCancel} className="text-red-500 hover:underline">Cancel</button>
          </td>
         
        </>
      ) : (
        // display values only
        <>
        
          <td className="px-6 py-4 font-medium">{contacts.Name}</td>
          <td className="px-6 py-4">{contacts.batch}</td>
          <td className="px-6 py-4">{contacts.mail}</td>
          <td className="px-6 py-4">{contacts.phoneNumber}</td>
          <td className="px-6 py-4">
            <button onClick={handleEdit} className="text-blue-500 hover:underline">Edit</button>
          </td>
          <td className="px-6 py-4">
            <button onClick={()=>handleDelete(contacts.id)}className="text-red-500 hover:underline">Delete</button>
          </td>
        </>
      )}
      </tr>
    </>
  );
};

export default Row;
