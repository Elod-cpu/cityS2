
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Adidas_shoes from '../images/Adidas_shoes.jpg';
// import nike_shoes from '../images/nike_shoes.jpg';
// import puma_shoes from '../images/puma_shoes.jpg';
import axios from 'axios';
import React, { useState, useEffect } from "react";



export default function Chaussures() {

   // connexion à lq bqse de données

   const [chaussures, setChaussures] = useState([]);
  
   useEffect(() => {
     getChaussures();
   }, []);
 
   const getChaussures = async () => {
     const response = await axios.get("http://localhost:3500/api/chaussures");
     setChaussures(response.data);
   };


  const [Pointure, setPointure] = React.useState('');

  const handleChangePointures = (event) => {
    setPointure(event.target.value);
  };
  const [Marques, setMarques] = React.useState('');

  const handleChangeMarques = (event) => {
    setMarques(event.target.value);
  };

 
  return (
    <div>
        <div className='Selects'>
        <Box sx={{ minWidth: 120, marginRight: 3, width: 200 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Pointures</InputLabel>
            <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Pointure}
            label="Age"
            onChange={handleChangePointures}
            >
            <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>35</MenuItem>
        <MenuItem value={20}>39</MenuItem>
        <MenuItem value={30}>41</MenuItem>
        <MenuItem value={40}>42</MenuItem>
        <MenuItem value={50}>45</MenuItem>

            </Select>
        </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, marginRight: 3, width: 200  }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marques</InputLabel>
        <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Marques}
            label="Age"
            onChange={handleChangeMarques}
        >
            <MenuItem value={10}>Toutes</MenuItem>
            <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Adidas</MenuItem>
        <MenuItem value={20}>Nike</MenuItem>
        <MenuItem value={30}>Vans</MenuItem>
        <MenuItem value={40}>Puma</MenuItem>
        <MenuItem value={50}>Reebok</MenuItem>

        </Select>
        </FormControl>
        </Box>
        </div>
        <div className='Chaussures'>
        {chaussures.map((chaussure) => {
        return(
        <Card sx={{ maxWidth: 360, marginTop: 5 }} key={chaussure.nom_chaussure} className='cards'>
      <CardMedia
        component="img"
        height="300"
        image={chaussure.images}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {chaussure.nom_chaussure}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        couleur:{chaussure.couleur}-
        pointure:{chaussure.pointure} <br></br><br/>
        prix:{chaussure.prix} FCFA
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
        </Card>)})}
        {/* <Card sx={{ maxWidth: 360, marginTop: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image={Adidas_shoes}
        alt="adidas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ADIDAS
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        component="img"
        height="350"
        image={nike_shoes}
        alt="jordan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        NIKE AIR JORDAN 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        component="img"
        height="350"
        image={puma_shoes}
        alt="jordan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        PUMA 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Acheter</Button>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
      </Card> */}
        </div>
    </div>

  );
}
