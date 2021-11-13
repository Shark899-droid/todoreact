import React, { useState } from 'react';
import './ToDo.css';
import Header from './Header';
import Body from './Body';
import Add from './Add';
import { Route, Routes } from 'react-router-dom';

const ToDo = ({ items }) => {
  const [add, setAdd] = useState(false);
  return (
    <>
      <Header items={items} />

      <Routes>
        <Route path='/' element={<Body items={items} setAdd={setAdd} />} />
        <Route path='add' element={<Add setAdd={setAdd} />} />
      </Routes>

      {/* {add ? <Add setAdd={setAdd} /> : <Body items={items} setAdd={setAdd} />} */}
    </>
  );
};

export default ToDo;
