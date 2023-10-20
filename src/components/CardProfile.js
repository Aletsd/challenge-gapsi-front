import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../assets/profile.png';
import axios from 'axios';

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '85vh', // Otra opción para centrar verticalmente
};

 function CardProfile() {
  

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
    <div style={cardStyle}>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          sx={{ height: 350 }}
          image={profile}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">    
            
            {jsonData ? (              
                <pre>{JSON.stringify(jsonData.texto, null, 2)}</pre>
            ) : (
              <p>Cargando datos...</p>
            )}      
          </Typography>
          <Typography gutterBottom component="div">
            
            <p size="small">Express version: 
              {jsonData ? (              
                  <pre>Version server: {JSON.stringify(jsonData.expressVersion, null, 2)}</pre>
              ) : (
                <p>Cargando datos...</p>
              )} 
            </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ¡Hola! Soy un apasionado Desarrollador Fullstack con más de 8 años de experiencia en el campo. 
            Mi enfoque principal está en el desarrollo del backend. Además, tengo un sólido conocimiento en big data,
             análisis de datos, microservicios y definición de arquitectura.
          </Typography>
        </CardContent>
        <CardActions>
          
          <Button size="small">Continuar</Button>
        </CardActions>
      </Card>
     </div>
  );
}
export default CardProfile;