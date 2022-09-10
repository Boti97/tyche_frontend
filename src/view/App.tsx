import './App.css';
import { CssBaseline, Grid, Paper, styled } from '@mui/material';

import { AppHeader, NotificationDetails, NotificationTable } from '../components';

import styles from './App.styles';

const AppContainer = styled('div')(styles);

function App() {
  return (
    <AppContainer>
      <CssBaseline />
      <AppHeader></AppHeader>
      <Grid container>
        <Grid item xs={8}>
          <Paper className={'paperStyles'} elevation={3}>
            <NotificationTable></NotificationTable>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={'paperStyles'} elevation={3}>
            <NotificationDetails></NotificationDetails>
          </Paper>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default App;
