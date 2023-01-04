import { Outlet } from 'react-router-dom';
import Routes from 'src/Route';

const App = () => {
  return (
    <div>
      <Routes />
      <Outlet />
    </div>
  );
};

export default App;
