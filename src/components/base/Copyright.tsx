import { ReactElement } from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright(): ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      WESANG {new Date().getFullYear()}
      {'. '}
      {process.env.NEXT_PUBLIC_DEPLOY_VERSION}
    </Typography>
  );
}
