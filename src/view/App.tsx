import './App.css';
import { CssBaseline, Grid, styled } from '@mui/material';
import React from 'react';

import { AppHeader, NotificationDetails, NotificationTable } from '../components';

import styles from './App.styles';

const AppContainer = styled('div')(styles);

function App() {
  return (
    <AppContainer>
      <CssBaseline />
      <AppHeader></AppHeader>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <NotificationTable></NotificationTable>
        </Grid>
        <Grid item xs={6} md={4}>
          <NotificationDetails></NotificationDetails>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default App;
