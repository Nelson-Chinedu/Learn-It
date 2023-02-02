import { Outlet } from 'react-router-dom';
import GoogleOneTapLogin from 'react-google-one-tap-login';

import Routes from 'src/Route';

const App = () => {
  return (
    <div>
      <GoogleOneTapLogin
        // eslint-disable-next-line no-console
        onError={(error) => console.log(error)}
        // eslint-disable-next-line no-console
        onSuccess={(response) => console.log(response)}
        googleAccountConfigs={{
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        }}
      />
      <Routes />
      <Outlet />
    </div>
  );
};

export default App;
