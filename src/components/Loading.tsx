import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '100%', padding: '20px' }}
    >
      <CircularProgress sx={{ color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8') }} />
    </Box>
  );
}
