import { ThemeProvider, CssBaseline } from '@mui/material';
import { HashRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './i18n/i18n';
import theme from './theme/theme';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
