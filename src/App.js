import logo from './logo.svg';
import './App.css';
import AppRoutes from './layout/AppRoutes';

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
