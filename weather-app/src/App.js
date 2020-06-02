import React, { useState } from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Papper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

//Components
import LocationList from './components/LocationList';
import ForeCastExtended from './components/ForecastExtended';

const cities = [
  'London,uk',
  'Mexico, mex',
  'Argentina, ar',
  'Washington, us',
  'Bogota, col'
];
function App() {
  const [city, setCity] = useState(null);
  const handleSelectionLocation = newCity => {
    setCity(newCity);
  };

  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography component="h1" variant="h3" color="inherit">
              Weather APP
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Papper elevation={3}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={ handleSelectionLocation }
            />
          </Papper>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Papper elevation={3}>
            {
              city &&
              <ForeCastExtended city={ city }/>
            }
            
            
          </Papper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
