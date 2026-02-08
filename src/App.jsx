import { ThemeProvider, CssBaseline } from '@mui/material';
import { HashRouter } from 'react-router-dom';
import './i18n/i18n';
import theme from './theme/theme';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
