import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
  table: {
    border: '1px solid rgba(224, 224, 224, 1)',
    minWidth: 650,
    '& .MuiTableCell-root': {
      borderLeft: '1px solid rgba(224, 224, 224, 1)',
    },
  },
});
