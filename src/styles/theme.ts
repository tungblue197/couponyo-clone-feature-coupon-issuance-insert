import { createTheme } from '@mui/material';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';

export const theme = createTheme({
  palette: {
    secondary: {
      main: '#28343C',
      light: '#576873',
      dark: '#151E23',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Noto Sans KR', 'sans-serif'].join(','),
    h6: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
    },
    caption: {
      color: 'dimgray'
    }
  },
});
