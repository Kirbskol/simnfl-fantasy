import React, { useState } from 'react'

const Form = ({ onStartDraft }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartDraft(name);
  };

  return (
    <div className="flex-col p-2 items-center text-center">
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              className="bg-slate-900 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded text-center" 
              placeholder="Username" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Enter Draft
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form