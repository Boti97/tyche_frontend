import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1
  },
  {
    field: 'nameOfCity',
    headerName: 'Name of city',
    flex: 1
  },
  {
    field: 'notificationTemperature',
    headerName: 'Temperature for notice',
    type: 'number',
    flex: 1
  }
];

const rows = [
  {
    id: 1,
    description: 'Notification Message 1',
    nameOfCity: 'Los Angeles',
    notificationTemperature: 35
  },
  {
    id: 2,
    description: 'Notification Message 2',
    nameOfCity: 'Budapest',
    notificationTemperature: 20
  },
  {
    id: 3,
    description: 'Notification Message 3',
    nameOfCity: 'London',
    notificationTemperature: 21
  },
  {
    id: 4,
    description: 'Notification Message 4',
    nameOfCity: 'Singapore',
    notificationTemperature: 16
  },
  {
    id: 5,
    description: 'Notification Message 5',
    nameOfCity: 'Venice',
    notificationTemperature: 22
  },
  {
    id: 6,
    description: 'Notification Message 6',
    nameOfCity: 'Bangladesh',
    notificationTemperature: 15
  },
  {
    id: 7,
    description: 'Notification Message 7',
    nameOfCity: 'Paris',
    notificationTemperature: 23
  },
  {
    id: 8,
    description: 'Notification Message 8',
    nameOfCity: 'Szolnok',
    notificationTemperature: 24
  },
  {
    id: 9,
    description: 'Notification Message 9',
    nameOfCity: 'New York',
    notificationTemperature: 25
  }
];

const NotificationTable = () => {
  return (
    <div role="NotificationTable" style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default NotificationTable;
