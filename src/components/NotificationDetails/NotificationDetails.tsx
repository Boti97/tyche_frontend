import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material';

export {};

const NotificationDetails = () => {
  return (
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
  );
};

export default NotificationDetails;
