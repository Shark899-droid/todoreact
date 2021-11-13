import React from 'react';
import './Main.css';

const Main = ({ started }) => {
  return (
    <div className='containerMain'>
      <h1>TaskDo</h1>
      <h3>Manage You Task Checklist Easily</h3>
      <button type='button' onClick={() => started(true)}>
        Lets Start
      </button>
    </div>
  );
};

export default Main;
