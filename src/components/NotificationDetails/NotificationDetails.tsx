import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
  styled
} from '@mui/material';

import styles from './NotificationDetails.styles';

export {};
const NotificationDetailsRoot = styled(Paper)(styles);

const NotificationDetails = () => {
  return (
    <NotificationDetailsRoot role="NotificationDetails">
      <Box className="rootBox">
        <Typography variant="h6" gutterBottom>
          Details of the notification
        </Typography>
        <Typography>City name: Budapest</Typography>
        <Typography>Current temperature: 33°C</Typography>
        <Typography>Notification temperature: 10°C</Typography>
        <Typography>Message: Put on a coat!</Typography>
        <Box sx={{ display: 'flex' }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Email: "
              labelPlacement="start"
            />
          </FormGroup>
        </Box>
      </Box>
    </NotificationDetailsRoot>
  );
};

export default NotificationDetails;
