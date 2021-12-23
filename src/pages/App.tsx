import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from 'src/pages/About';
import Home from 'src/pages/Home';

const App: FunctionComponent<Record<string, never>> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export default App;
