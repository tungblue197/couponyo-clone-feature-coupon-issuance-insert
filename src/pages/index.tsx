import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Index() {
  return (
    <Box height="100%">
      <Typography>{process.env.NEXT_PUBLIC_ENVIRONMENT}</Typography>
    </Box>
  );
}
