import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import ToDo from './components/ToDo';

function App() {
  const [started, setStarted] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('http://localhost:9000/api/new');
      setItems(req.data);
    }
    fetchData();
  }, [items]);
  return (
    <div>
      {/* {started === false ? (
        <Main started={setStarted} />
      ) : ( */}
      <ToDo items={items} />
      {/* )} */}
    </div>
  );
}

export default App;
