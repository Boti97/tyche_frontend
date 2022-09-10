import { Checkbox, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';

export {};

const NotificationDetails = () => {
  return (
    <Paper>
      <Typography>Details of the notification</Typography>
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
    </Paper>
  );
};

export default NotificationDetails;
