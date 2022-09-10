import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography, styled } from '@mui/material';

import styles from './AppHeader.styles';
const AppHeaderRoot = styled(Box)(styles);

const AppHeader = () => {
  return (
    <AppHeaderRoot sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            Tyche
          </Typography>
        </Toolbar>
      </AppBar>
    </AppHeaderRoot>
  );
};

export default AppHeader;
