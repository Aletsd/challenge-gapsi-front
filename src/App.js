
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuPrimary from './components/MenuPrimary'
import CardProfile from './components/CardProfile'

function App() {
  const [jsonData, setJsonData] = useState(null);
  

  useEffect(() => {    
    axios.get('http://127.0.0.1:5000/') // url endpoint
      .then((response) => {
        setJsonData(response.data);
        
        //texto = JSON.stringify(jsonData.texto, null, 2)
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className="App">
      <MenuPrimary></MenuPrimary>
      <CardProfile texto={JSON.stringify(jsonData.texto, null, 2)} expressVersion={JSON.stringify(jsonData.expressVersion, null, 2)}></CardProfile>      
      
    </div>
  );
}

export default App;
