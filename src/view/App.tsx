import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import {
  Autocomplete,
  Button,
  CssBaseline,
  InputAdornment,
  Stack,
  TextField,
  styled
} from '@mui/material';
import React from 'react';

import { NotificationDetails, NotificationTable } from '../components';

import styles from './App.styles';

const AppContainer = styled(Stack)(styles);

function App() {
  return (
    <AppContainer direction="row" spacing={2}>
      <CssBaseline />
      <div>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            options={[]}
            sx={{ width: 300 }}
            renderInput={(params: { InputProps: object }) => (
              <TextField
                {...params}
                fullWidth
                placeholder={'Search for notification...'}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start" className="searchIcon">
                      <SearchIcon data-testid="SearchIcon" />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
          <Button variant="contained" startIcon={<AddIcon />}>
            ADD NEW
          </Button>
        </Stack>
        <NotificationTable></NotificationTable>
      </div>
      <NotificationDetails></NotificationDetails>
    </AppContainer>
  );
}

export default App;
