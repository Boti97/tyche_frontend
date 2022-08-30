import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
  styled
} from '@mui/material';
import React from 'react';

import styles from './App.styles';

const AppContainer = styled(Stack)(styles);

function App() {
  return (
    <AppContainer direction="row" spacing={2}>
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
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding>
            <ListItemButton>
              <ListItemText primary="Name of notification 1" />
            </ListItemButton>
          </ListItem>
          <Divider component="li" />
          <ListItem
            secondaryAction={
              <IconButton edge="end">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding>
            <ListItemButton>
              <ListItemText primary="Name of notification 2" />
            </ListItemButton>
          </ListItem>
          <Divider component="li" />
          <ListItem
            secondaryAction={
              <IconButton edge="end">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding>
            <ListItemButton>
              <ListItemText primary="Name of notification 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <Card sx={{ maxHeight: 275 }}>
        <CardContent>
          <Typography variant="h5">Details of the notification</Typography>
          <Typography>City name: Budapest</Typography>
          <Typography>Current temperature: 33°C</Typography>
          <Typography>Notification temperature: 10°C</Typography>
          <Typography>Message: Put on a coat!</Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Email: "
              labelPlacement="start"
            />
          </FormGroup>
        </CardContent>
      </Card>
    </AppContainer>
  );
}

export default App;
