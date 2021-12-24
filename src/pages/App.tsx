import { FunctionComponent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import theme from 'src/Theme';

import Home from 'src/pages/Home';

const App: FunctionComponent<Record<string, never>> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
