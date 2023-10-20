import logo from './assets/logo.png';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/') // url endpoint
      .then((response) => {
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>Mi Aplicación React</h1>
      <div>
      <pre>{JSON.stringify(jsonData.texto, null, 2)}</pre>
      <pre>{JSON.stringify(jsonData.expressVersion, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
