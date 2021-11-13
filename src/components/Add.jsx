import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Add.css';

const Add = ({ setAdd }) => {
  const [input, setInput] = useState('');

  const sendItem = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:9000/api/new', {
      item: input,
    });
    setInput('');
    setAdd(false);
  };
  return (
    <div className='centered'>
      <form>
        <h1>Add Task</h1>
        <label htmlFor='item'>Item</label>
        <input
          type='text'
          name='item'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' onClick={sendItem}>
          Add
        </button>
      </form>
    </div>
  );
};
export default Add;
