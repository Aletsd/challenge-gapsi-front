import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from '../assets/profile.png';

const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh', // Otra opción para centrar verticalmente
};

 function CardProfile(props) {
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
            {props.texto}            
          </Typography>
          <Typography gutterBottom component="div">
            
            <p size="small">Express version: {props.expressVersion}</p>
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