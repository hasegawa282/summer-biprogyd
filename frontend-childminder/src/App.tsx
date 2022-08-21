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
import Attendances from 'pages/Attendances';
import BpDocument from 'components/organisms/BpDocument';

const App = () => {
  return (
    <BrowserRouter>
      <BpDocument>
        <Routes>
          <Route index element={<Attendances />} />
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
      </BpDocument>
    </BrowserRouter>
  );
};

export default App;
