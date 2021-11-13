import React, { useState } from 'react';
import './ToDo.css';
import Header from './Header';
import Body from './Body';
import Add from './Add';

const ToDo = ({ items }) => {
  const [add, setAdd] = useState(false);
  return (
    <>
      <Header items={items} />
      {add ? <Add setAdd={setAdd} /> : <Body items={items} setAdd={setAdd} />}
    </>
  );
};

export default ToDo;
