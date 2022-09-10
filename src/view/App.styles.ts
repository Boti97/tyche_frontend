import {} from '@mui/system';

export default () => ({
  height: '100vh',
  width: '100%',
  backgroundColor: '#A6D9F7',

  '& .viewContainer': {
    overflow: 'auto',
    flex: 1
  },
  '& .MuiFormControl-root': {
    backgroundColor: '#FFFFFF',
    borderRadius: 4
  },
  '& .MuiStack-root': {
    height: '5px'
  }
});
