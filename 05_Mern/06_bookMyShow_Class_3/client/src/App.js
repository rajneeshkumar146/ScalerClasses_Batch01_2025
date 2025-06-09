import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}></Route>

          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
