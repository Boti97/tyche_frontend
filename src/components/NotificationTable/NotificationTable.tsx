import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const NotificationTable = () => {
  return (
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
  );
};

export default NotificationTable;
