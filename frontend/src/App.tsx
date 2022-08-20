// -- css parts --
import './App.css';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

// -- basic library --
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import browserHistory from 'browserHistory';

// -- external pages --
import Homes from 'pages/Homes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homes />} />
        {/* <Route index element={<PrivateRoute component={<Homes />} />} /> */}
        {/* <Route
                    path="/hase"
                    element={<PrivateRoute component={<Hase />} />}
                />
                <Route
                    path="/dataset"
                    element={<PrivateRoute component={<Dataset />} />}
                /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
