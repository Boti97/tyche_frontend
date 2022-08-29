import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import './App.css';
import {
  Autocomplete,
  IconButton,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  TextField,
  InputAdornment,
  Stack,
  Card,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './App.styles';

const AppContainer = styled(Stack)(styles);

function App() {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <Stack direction="row" spacing={2}>
        <div>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params: { InputProps: object }) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder={t('placeholders.search')}
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
            <IconButton>
              <AddIcon></AddIcon>
            </IconButton>
          </Stack>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemButton>
                <ListItemText primary="Name of notification 1" />
              </ListItemButton>
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemButton>
                <ListItemText primary="Name of notification 2" />
              </ListItemButton>
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemButton>
                <ListItemText primary="Name of notification 3" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <Card sx={{ minWidth: 275 }}>
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
      </Stack>
    </AppContainer>
  );
}

export default App;
