import React, { useState } from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Papper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

//Containers
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'London,uk',
  'Mexico, mex',
  'Argentina, ar',
  'Washington, us',
  'Bogota, col'
];

function App(props) {
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
            <LocationListContainer cities={cities} />
          </Papper>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Papper elevation={3}>
            <ForecastExtendedContainer />
          </Papper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;