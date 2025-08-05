import React, { useState } from 'react';
import data from './data.json';
import Row from './row.jsx';

const Table = () => {
  const [contacts, setContacts] = useState(data);
  const [editing, setEditing] = useState(null);
  const [find,setFind] = useState("")


// save option
  const handleSave = (id, updatedRow) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, ...updatedRow } : contact
    );
    setContacts(updatedContacts);
    setEditing(null);
  };

// delte option
  const handleDelete =(id)  =>{
    const remaingdata = contacts.filter(contacts => contacts.id != id)
    setContacts(remaingdata)
    
  }

//   search option
const handleSearch = (info) => {
    
    const searchinfo = data.filter(contacts => contacts.Name.includes(info))
    setContacts(searchinfo)
    setFind(searchinfo)

}

  return (
    <>
      {/* head */}
      <div className="text-5xl font-bold text-white mb-9">
        <h1>Student Details</h1>
      </div>

      {/* Search  */}
      <div className="relative w-72 mb-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg  width="20" height="20"fill="none" stroke="currentColor" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round"className="text-gray-400">
            <path d="M21 21l-4.34-4.34" /><circle cx="11" cy="11" r="8" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search"
          className="w-150 pl-10 p-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* table */}
<div className="relative overflow-x-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg max-w-5xl">
        <table className="w-full text-sm text-left text-gray-200 ">


          
        {/* table head */}
<thead className="text-xs uppercase bg-white/20 text-white tracking-wider">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">batch</th>
              <th className="px-6 py-3">Mail-ID</th>
              <th className="px-6 py-3">Phone-No</th>
              <th className="px-6 py-3">Actions</th>
              <th className="px-6 py-3">Remove</th>
            </tr>
          </thead>

          {/* table body */}

          <tbody>
            {contacts.map(contact => (
              
                <Row
                  contacts={contact}
                  setEditing={setEditing}
                  editing={editing}
                  handleSave={handleSave}
                  handleDelete = {handleDelete}
                />
             
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
