import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#03a9f4',
    },
  },
  typography: {
    h2: {
      fontSize: '2.5rem',
      textAlign: 'center',
    },
  },
});

export default theme;

