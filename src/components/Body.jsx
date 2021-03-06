import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
const Body = ({ items, setAdd }) => {
  return (
    <section>
      <div className='container'>
        <div className='add'>
          <span id='adding' className='material-icons'>
            <Link to='/add'>add</Link>
          </span>

          <h2>Add New Task</h2>
        </div>
        {items.map(({ _id, completed, item }) => {
          return (
            <div className='section' key={_id}>
              <span id='deleting' className='material-icons'>
                delete
              </span>
              <input type='checkbox' checked={completed ? true : false} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Body;
